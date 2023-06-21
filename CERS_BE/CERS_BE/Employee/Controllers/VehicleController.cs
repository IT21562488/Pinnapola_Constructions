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
    public class VehicleController : ControllerBase
    {
        private readonly Ivehicle _vehicle;

        public VehicleController(Ivehicle vehicle)
        {
            _vehicle = vehicle;

        }

        // GET: api/<controller>
        [HttpGet("select/{VID}")]
        public async Task<ActionResult> Select(int VID)
        {
            _vehicle.SetRequest(Request);
            var response = await _vehicle.Select(VID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }
    }
}