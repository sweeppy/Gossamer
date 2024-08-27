
using auth_service.Dto.Verification;
using auth_service.Services.Auth.Interfaces;
using auth_service.Services.JWT;
using auth_service.Services.UserService;
using Microsoft.AspNetCore.Mvc;

namespace auth_service.Controllers
{
    [ApiController]
    [Route("api/Auth")]
    public class AuthController : ControllerBase
    {
        private readonly IVerify _verifyService;
        private readonly IInitializeAccount _initializeAccount;

        private readonly IJwtService _jwtService;

        private readonly IUserService _userService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(
            ILogger<AuthController> logger,
            IVerify confirmEmailService,
            IInitializeAccount initializeAccount,
            IUserService userService,
            IJwtService jwtService)
        {
            _logger = logger;
            _verifyService = confirmEmailService;
            _initializeAccount = initializeAccount;
            _userService = userService;
            _jwtService = jwtService;
        }

        [HttpPost("sendVCode")]
        public async Task<IActionResult> SendEmailVerificationCode([FromBody] string email)
        {
            var response = await _verifyService.SendEmailConfirmation(email);
            if (!response.IsSuccess)
            {
                return BadRequest(response.ResponseMessage);
            }
            try
            {
                await _initializeAccount.InitializeUser(email, response.VerificationCode);
            }
            catch (Exception ex)
            {
                _logger.LogCritical(ex.Message);
            }
            return Ok(response.ResponseMessage);
        }

        [HttpPost("verifyVcode")]
        public async Task<IActionResult> VerifyCode([FromBody]EmailAndDataRequest request)
        {
            var response = await _verifyService.VerifyCode(request.email, request.data);
            if (!response.IsSuccess)
            {
                return BadRequest(response.ResponseMessage);
            }
            try
            {
                var token =_jwtService.GenerateToken(request.email);
                return Ok(token);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Erorr was occurred while generating jwt token: {ex.Message}");
                return BadRequest("Generate token error");
            }

        }

        [HttpPost("isUserExist")]
        public async Task<IActionResult> IsUserExists([FromBody] string email)
        {
            try
            {
                bool isExists = await _userService.isUserExists(email);
                return Ok(isExists);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Error was occured while trying to find user: {ex.Message}");
                return BadRequest("Error was occured while trying to find user");
            }
        }

        [HttpPost("PasswordAuth")]
        public async Task<IActionResult> PasswordLogin([FromBody] EmailAndDataRequest request)
        {
            var response = await _verifyService.LogInByPassword(request.email, request.data);
            switch (response.IsSuccess)
            {
                case true:
                    return Ok(response.ResponseMessage);
                case false:
                    return BadRequest(response.ResponseMessage);
            }
        }
    }
}
