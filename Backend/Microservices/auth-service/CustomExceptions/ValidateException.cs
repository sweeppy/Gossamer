
    namespace auth_service.CustomExceptions
    {
        public class ValidateException: Exception
        {
            public IDictionary<string, string[]> Errors { get; set; }
            public ValidateException() : base("One or more validation failures have occurred.")
            {
                Errors = new Dictionary<string, string[]>();
            }

            public ValidateException(IEnumerable<ValidateFailure> failures)
                : this()
            {
                Errors = failures
                    .GroupBy(e => e.PropertyName, e => e.ErrorMessage)
                    .ToDictionary(failureGroup => failureGroup.Key, failureGroup => failureGroup.ToArray());
            }
        }

        public class ValidateFailure
        {
            public string PropertyName { get; set; }
            public string ErrorMessage { get; set; }

            public ValidateFailure(string propertyName, string errorMessage)
            {
                PropertyName = propertyName;
                ErrorMessage = errorMessage;
            }
        }
}
