namespace auth_service.Dto.Verification
{
    public record VerifyCodeRequest(string email, string verificationCode);
}
