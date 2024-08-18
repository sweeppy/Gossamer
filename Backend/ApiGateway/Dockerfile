FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5078

ENV ASPNETCORE_URLS=http://+:5078
ENV ASPNETCORE_ENVIRONMENT=Development

USER app

FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG configuration=Release
WORKDIR /src
COPY ["Backend/ApiGateway/ApiGateway.csproj", "Backend/ApiGateway/"]
RUN dotnet restore "Backend/ApiGateway/ApiGateway.csproj"
COPY . .
WORKDIR "/src/Backend/ApiGateway/"
RUN dotnet build "ApiGateway.csproj" -c ${configuration} -o /app/build -p:UseAppHost=false

FROM build AS publish
RUN dotnet publish "ApiGateway.csproj" -c ${configuration} -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ApiGateway.dll"]
