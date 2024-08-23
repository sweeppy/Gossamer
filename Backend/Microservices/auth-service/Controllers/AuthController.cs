using auth_service.Dto.Auth;
using auth_service.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace auth_service.Controllers
{
    [ApiController]
    [Route("api/Auth")]
    public class AuthController : ControllerBase
    {
        private readonly IVerify _verifyService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(
            ILogger<AuthController> logger,
            IVerify confirmEmailService)
        {
            _logger = logger;
            _verifyService = confirmEmailService;
        }

        [HttpPost("sendVCode")]
        public async Task<IActionResult> SendEmailVerificationCode([FromBody] string email)
        {
            var verificationCodeResponse = await _verifyService.SendEmailConfirmation(email);
            if (!verificationCodeResponse.IsSuccess)
            {
                return BadRequest(verificationCodeResponse.ResponseMessage);
            }
            else return Ok(verificationCodeResponse.ResponseMessage);
        }

        [HttpPost("verifyVcode")]
        public async Task<IActionResult> VerifyCode([FromBody] string email, int verificationCode)
        {
            var response = await _verifyService.VerifyCode(email, verificationCode);
            if (!response.IsSuccess)
            {
                return BadRequest(response.ResponseMessage);
            }
            else return Ok(response.ResponseMessage);
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserRequest requestBody)
        {
            return NoContent();
        }
    }
}
