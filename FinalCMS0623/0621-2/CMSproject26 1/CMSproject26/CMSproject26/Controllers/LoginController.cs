using CMSproject26.DTO;
using CMSproject26.Models;
using CMSproject26.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CMSproject26.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly LoginRepository _loginRepository;

        public LoginController(ApplicationDbContext context)
        {
            _loginRepository = new LoginRepository(context);
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginDTO loginDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var isValid = await _loginRepository.ValidateUser(loginDTO);

            if (isValid)
            {
                // Return a successful response or generate a token for authentication
                return Ok("Login successful");
            }
            else
            {
                return Unauthorized("Invalid email or password");
            }
        }
    }
}
