FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5280

ENV ASPNETCORE_URLS=http://+:5280
ENV ASPNETCORE_ENVIRONMENT=Development

USER app
FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG configuration=Release
WORKDIR /src
COPY ["Backend/Microservices/auth-service/auth-service.csproj", "Backend/Microservices/auth-service/"]
RUN dotnet restore "Backend/Microservices/auth-service/auth-service.csproj"
COPY . .
WORKDIR "/src/Backend/Microservices/auth-service"
RUN dotnet build "auth-service.csproj" -c $configuration -o /app/build

FROM build AS publish
ARG configuration=Release
RUN dotnet publish "auth-service.csproj" -c $configuration -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "auth-service.dll"]
