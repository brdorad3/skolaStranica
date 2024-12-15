using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MyWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MyWebApp.Services;

namespace MyWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly MongoDbService _mongoDbService;

        
        public FormController(MongoDbService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitForm([FromBody] FormData formData)
        {
            
            await _mongoDbService.SaveFormDataAsync(formData);

           
            return Ok(new { message = "Form submitted and saved to database successfully", data = formData });
        }
    }
}
