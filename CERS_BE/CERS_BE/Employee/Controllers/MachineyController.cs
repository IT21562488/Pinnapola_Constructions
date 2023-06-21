using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Employee.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Employee.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class machineryController : ControllerBase
    {
        private readonly IMachinery _machinery;

        public machineryController(IMachinery machinery)
        {
            _machinery = machinery;

        }

        // GET: api/<controller>
        [HttpGet("select/{MID}")]
        public async Task<ActionResult> Select(int MID)
        {
            _machinery.SetRequest(Request);
            var response = await _machinery.Select(MID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }
    }
}