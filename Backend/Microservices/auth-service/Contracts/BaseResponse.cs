namespace auth_service.Contracts
{
    public class BaseResponse
    {
        public required bool IsSuccess { get; set; }
        public string? ResponseMessage { get; set; }
    }
}
