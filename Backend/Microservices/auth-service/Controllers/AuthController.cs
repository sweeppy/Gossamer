using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using auth_service.Requests.Auth;
using auth_service.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace auth_service.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserRequest requestBody)
        {
            var authResponse = await _authService.Register(requestBody);
            if (!authResponse.IsSuccess)
            {
                return BadRequest(authResponse.ResponseMessage);
            }

            return NoContent();
        }
    }
}
