using CMSproject26.Models;
using CMSproject26.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CMSproject26.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTypeMasterController : ControllerBase
    {
        private readonly IUserTypeMasterRepository _repository;

        public UserTypeMasterController(IUserTypeMasterRepository repository)
        {
            _repository = repository;
        }

        // GET: api/UserTypeMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserTypeMaster>>> GetUserTypes()
        {
            return Ok(await _repository.GetAllAsync());
        }

        // GET: api/UserTypeMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserTypeMaster>> GetUserType(int id)
        {
            var userType = await _repository.GetByIdAsync(id);

            if (userType == null)
            {
                return NotFound();
            }

            return Ok(userType);
        }

        // POST: api/UserTypeMaster
        [HttpPost]
        public async Task<ActionResult<UserTypeMaster>> PostUserType(UserTypeMaster userTypeMaster)
        {
            try
            {
                var createdUserType = await _repository.AddAsync(userTypeMaster);
                return CreatedAtAction("GetUserType", new { id = createdUserType.Id }, createdUserType);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        // PUT: api/UserTypeMaster/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserType(int id, UserTypeMaster userTypeMaster)
        {
            if (id != userTypeMaster.Id)
            {
                return BadRequest();
            }

            try
            {
                await _repository.UpdateAsync(userTypeMaster);
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

        // DELETE: api/UserTypeMaster/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserTypeMaster>> DeleteUserType(int id)
        {
            try
            {
                var userType = await _repository.DeleteAsync(id);
                return Ok(userType);
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
    }
}
