using Aspose.Email.Tools.Verifications;

namespace auth_service.Validations
{
    public static class EmailValidation
    {
        public static bool ValidateEmail(string email)
        {
            EmailValidator validator = new EmailValidator();

            validator.Validate(email, out var result);

            return result.ReturnCode == ValidationResponseCode.ValidationSuccess;
        }
    }
}
