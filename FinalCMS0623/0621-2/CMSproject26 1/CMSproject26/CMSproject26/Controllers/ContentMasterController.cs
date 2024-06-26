using CMSproject26.Models;
using CMSproject26.Repositories;
using Microsoft.AspNetCore.Mvc;


namespace CMSproject26.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentMasterController : ControllerBase
    {
        private readonly IContentMasterRepository _repository;

        public ContentMasterController(IContentMasterRepository repository)
        {
            _repository = repository;
        }

        // GET: api/ContentMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContentMaster>>> GetContentMasters()
        {
            return Ok(await _repository.GetAllAsync());
        }

        // GET: api/ContentMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContentMaster>> GetContentMaster(int id)
        {
            var contentMaster = await _repository.GetByIdAsync(id);

            if (contentMaster == null)
            {
                return NotFound();
            }

            return Ok(contentMaster);
        }

        // PUT: api/ContentMaster/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContentMaster(int id, ContentMaster contentMaster)
        {
            if (id != contentMaster.Id)
            {
                return BadRequest();
            }

            try
            {
                await _repository.UpdateAsync(contentMaster);
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

        // POST: api/ContentMaster
        [HttpPost]
        public async Task<ActionResult<ContentMaster>> PostContentMaster(ContentMaster contentMaster)
        {
            try
            {
                var createdContentMaster = await _repository.AddAsync(contentMaster);
                return CreatedAtAction("GetContentMaster", new { id = createdContentMaster.Id }, createdContentMaster);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/ContentMaster/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ContentMaster>> DeleteContentMaster(int id)
        {
            try
            {
                var contentMaster = await _repository.DeleteAsync(id);
                return Ok(contentMaster);
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










        //// GET: api/ContentMaster/GetContentByUpdatedBy/{updatedBy}
        //[HttpGet("GetContentByUpdatedBy/{updatedBy}")]
        //public async Task<ActionResult<IEnumerable<ContentMaster>>> GetContentByUpdatedBy(string updatedBy)
        //{
        //    try
        //    {
        //        var contentMasters = await _repository.GetAllAsync();
        //        var filteredContentMasters = contentMasters.Where(cm => cm.UpdatedBy == updatedBy).ToList();
        //        return Ok(filteredContentMasters);
        //    }
        //    catch (Exception ex)
        //    {
        //        // Log the exception (implement logging as needed)
        //        throw new Exception("Error getting content by updated by", ex);
        //    }
        //}


        //// GET: api/ContentMaster/GetContentByUpdatedBy/{username}
        //[HttpGet("GetContentByUpdatedBy/{username}")]
        //public async Task<ActionResult<IEnumerable<ContentMaster>>> GetContentByUpdatedBy(string username)
        //{
        //    try
        //    {
        //        var contentMasters = await _repository.GetAllAsync();
        //        var filteredContentMasters = contentMasters.Where(cm => cm.UpdatedBy == username).ToList();
        //        return Ok(filteredContentMasters);
        //    }
        //    catch (Exception ex)
        //    {
        //        // Log the exception (implement logging as needed)
        //        throw new Exception("Error getting content by updated by", ex);
        //    }
        //}


















        //--------------------------0621---------------------------

        //// GET: api/ContentMaster/GetContentByUpdatedBy/{updatedBy}
        //[HttpGet("GetContentByUpdatedBy/{updatedBy}")]
        //public async Task<ActionResult<IEnumerable<ContentMaster>>> GetContentByUpdatedBy(string updatedBy)
        //{
        //    try
        //    {
        //        var contentMasters = await _repository.GetAllAsync();
        //        var filteredContentMasters = contentMasters.Where(cm => cm.UpdatedBy == updatedBy).ToList();
        //        return Ok(filteredContentMasters);
        //    }
        //    catch (Exception ex)
        //    {
        //        // Log the exception (implement logging as needed)
        //        throw new Exception("Error getting content by updated by", ex);
        //    }
        //}


        // GET: api/ContentMaster/GetContentByUpdatedBy/{updatedBy}
        [HttpGet("GetContentByUpdatedBy/{updatedBy}")]
        public async Task<ActionResult<IEnumerable<ContentMaster>>> GetContentByUpdatedBy(string updatedBy)
        {
            return Ok(await _repository.GetByUpdatedByAsync(updatedBy));
        }
    }

}
