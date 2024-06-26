using CMSproject26.DTO;
using CMSproject26.Models;
using CMSproject26.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CMSproject26.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserMasterController : ControllerBase
    {
        private readonly IUserMasterRepository _repository;

        public UserMasterController(IUserMasterRepository repository)
        {
            _repository = repository;
        }

        // GET: api/UserMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserMaster>>> GetUserMasters()
        {
            return Ok(await _repository.GetAllAsync());
        }


        // GET: api/UserMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserMaster>> GetUserMaster(int id)
        {
            var userMaster = await _repository.GetByIdAsync(id);

            if (userMaster == null)
            {
                return NotFound();
            }

            return Ok(userMaster);
        }

        // PUT: api/UserMaster/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserMaster(int id, UserMaster userMaster)
        {
            if (id != userMaster.Id)
            {
                return BadRequest();
            }

            try
            {
                await _repository.UpdateAsync(userMaster);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }

            return NoContent();
        }

        // POST: api/UserMaster
        [HttpPost]
        public async Task<ActionResult<UserMaster>> PostUserMaster(UserMaster userMaster)
        {
            try
            {
                var createdUserMaster = await _repository.AddAsync(userMaster);
                return CreatedAtAction("GetUserMaster", new { id = createdUserMaster.Id }, createdUserMaster);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/UserMaster/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserMaster>> DeleteUserMaster(int id)
        {
            try
            {
                var userMaster = await _repository.DeleteAsync(id);
                return Ok(userMaster);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }






















        [HttpGet("GetUpdatedBy")]
        public async Task<IActionResult> GetUpdatedBy([FromQuery] string email)
        {
            try
            {
                if (string.IsNullOrEmpty(email))
                {
                    return BadRequest("Email parameter is missing.");
                }

                var updatedBy = await _repository.GetUpdatedByByEmailAsync(email);
                if (updatedBy != null)
                {
                    return Ok(updatedBy);
                }
                else
                {
                    return NotFound($"No user found with email: {email}");
                }
            }
            catch (Exception ex)
            {
                // Log the exception details
                Console.Error.WriteLine($"Error getting UpdatedBy for email '{email}': {ex.Message}");
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }










        //----------WORKING_-----------------------


        //[HttpGet("GetUpdatedBy")]
        //public async Task<IActionResult> GetUpdatedBy([FromQuery] string email)
        //{
        //    try
        //    {
        //        var updatedBy = await _repository.GetUpdatedByByEmailAsync(email);
        //        if (updatedBy != null)
        //        {
        //            return Ok(updatedBy);
        //        }
        //        else
        //        {
        //            return NotFound();
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"Internal server error: {ex.Message}");
        //    }
        //}









        ////[HttpPost("Login")]
        ////public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        ////{
        ////    var user = await _repository.GetByEmailAndPasswordAsync(loginDTO);

        ////    if (user != null)
        ////    {
        ////        return Ok(new { success = true, message = "Login successful!" });
        ////    }
        ////    else
        ////    {
        ////        return BadRequest(new { success = false, message = "Invalid email or password" });
        ////    }
        ////}


        ////// Authentication logic
        ////private async Task<UserMaster> AuthenticateUser(string email, string password)
        ////{
        ////    return await _repository.GetByEmailAndPasswordAsync(new LoginDTO { Email = email, Password = password });
        ////}

        ////[HttpPost("Login")]
        ////public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        ////{
        ////    if (loginDTO == null)
        ////    {
        ////        return BadRequest(new { message = "Request body is missing or malformed." });
        ////    }

        ////    if (string.IsNullOrEmpty(loginDTO.Email) || string.IsNullOrEmpty(loginDTO.Password))
        ////    {
        ////        return BadRequest(new { message = "Email and Password are required." });
        ////    }

        ////    var user = await AuthenticateUser(loginDTO.Email, loginDTO.Password);
        ////    if (user != null)
        ////    {
        ////        return Ok(new { success = true, userId = user.Id });
        ////    }
        ////    else
        ////    {
        ////        return BadRequest(new { success = false, message = "Invalid email or password" });
        ////    }
        ////}




        ////// Authentication logic
        ////private async Task<UserMaster> AuthenticateUser(string email, string password)
        ////{
        ////    return await _repository.GetByEmailAndPasswordAsync(new LoginDTO { Email = email, Password = password });
        ////}

        ////[HttpPost("Login")]
        ////public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        ////{
        ////    if (loginDTO == null)
        ////    {
        ////        return BadRequest(new { message = "Request body is missing or malformed." });
        ////    }

        ////    if (string.IsNullOrEmpty(loginDTO.Email) || string.IsNullOrEmpty(loginDTO.Password))
        ////    {
        ////        return BadRequest(new { message = "Email and Password are required." });
        ////    }

        ////    var user = await AuthenticateUser(loginDTO.Email, loginDTO.Password);
        ////    if (user != null)
        ////    {
        ////        return Ok(new { success = true, userId = user.Id });
        ////    }
        ////    else
        ////    {
        ////        return BadRequest(new { success = false, message = "Invalid email or password" });
        ////    }
        ////}




        //[HttpPost("Login")]
        //public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        //{
        //    var user = await _repository.GetByEmailAndPasswordAsync(loginDTO);

        //    if (user != null)
        //    {
        //        return Ok(new { success = true, message = "Login successful!" });
        //    }
        //    else
        //    {
        //        return BadRequest(new { success = false, message = "Invalid email or password" });
        //    }
        //}









        //[HttpGet("GetUserTypesByUpdatedBy")]
        //public async Task<IActionResult> GetUserTypesByUpdatedBy([FromQuery] string updatedBy)
        //{
        //    var userTypes = await _repository.GetByUpdatedByAsync(updatedBy);

        //    if (userTypes != null)
        //    {
        //        return Ok(userTypes);
        //    }
        //    else
        //    {
        //        return NotFound();
        //    }
        //}
    }
}
