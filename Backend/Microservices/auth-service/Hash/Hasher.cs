using System.Security.Cryptography;
namespace auth_service.Hash
{
    public static class Hasher
    {
        public static int SaltSize = 16;
        public static int KeySize = 32;
        public static int Iterations = 10000;

        private static readonly ILogger _logger;

        static Hasher()
        {
            _logger = LoggerFactory.Create(builder =>
            {
                builder.AddConsole();
            }).CreateLogger("HasherLogger");
        }

        public static string Hash(string data)
        {
            // Create salt
            using (var rng = new RNGCryptoServiceProvider())
            {
                var salt = new byte[SaltSize];
                rng.GetBytes(salt);

                // Hash data
                using (var pbkdf2 = new Rfc2898DeriveBytes(data, salt, Iterations))
                {
                    var hash = pbkdf2.GetBytes(KeySize);

                    // Combine salt and hash
                    var hashBytes = new byte[SaltSize + KeySize];
                    Array.Copy(salt, 0, hashBytes, 0, SaltSize);
                    Array.Copy(hash, 0, hashBytes, SaltSize, KeySize);
                    
                    // Return value
                    return Convert.ToBase64String(hashBytes);
                }
            }
        }

        public static bool VerifyHash(string data, string hashedData)
        {
            byte[] hashBytes;
            // Get bytes
            try
            {
                hashBytes = Convert.FromBase64String(hashedData);
            }
            catch (FormatException ex)
            {
                _logger.LogCritical($"Error was occurred while getting hash data from db: {ex.Message}");
                return false;
            }

            //Get salt
            var salt = new byte[SaltSize];
            Array.Copy(hashBytes, 0, salt, 0, SaltSize);

            using (var pbkdf2 = new Rfc2898DeriveBytes(data, salt, Iterations))
            {
                var hash = pbkdf2.GetBytes(KeySize);

                for (int i = 0; i < KeySize; i++)
                {
                    if (hashBytes[i + SaltSize] != hash[i])
                    {
                        // Incorrect hash
                        return false;
                    }
                }
            }
            return true;
        }
    }
}
