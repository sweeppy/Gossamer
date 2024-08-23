namespace auth_service.Contracts.Verification
{
    public class VerificationCodeResponse : BaseResponse
    {
        public required string VerificationCode { get; set; }
    }
}
