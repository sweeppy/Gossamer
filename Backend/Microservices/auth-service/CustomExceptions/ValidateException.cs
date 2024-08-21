
    namespace auth_service.CustomExceptions
    {
        public class ValidateException: Exception
        {
            public IDictionary<string, string[]> Errors { get; set; }
            public ValidateException() : base("One or more validation failures have occurred.")
            {
                Errors = new Dictionary<string, string[]>();
            }

            public ValidateException(IEnumerable<ValidateFailures> failures)
                : this()
            {
                Errors = failures
                    .GroupBy(e => e.PropertyName, e => e.ErrorMessage)
                    .ToDictionary(failureGroup => failureGroup.Key, failureGroup => failureGroup.ToArray());
            }
        }

        public class ValidateFailures
        {
            public string PropertyName { get; set; }
            public string ErrorMessage { get; set; }

            public ValidateFailures(string propertyName, string errorMessage)
            {
                PropertyName = propertyName;
                ErrorMessage = errorMessage;
            }
        }
}
