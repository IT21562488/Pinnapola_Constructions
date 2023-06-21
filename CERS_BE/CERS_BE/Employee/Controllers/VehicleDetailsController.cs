using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Employee.Models;
using Employee.Repository.Interfaces;

namespace Employee.API.Controllers
{
    [Route("api/VehicleDetails/[controller]")]
    [ApiController]
    public class VehicleDetailsController : Controller
    {
        private readonly IVehicleDetailsRepository _vehicleDetailsRepository;

        public VehicleDetailsController(IVehicleDetailsRepository vehicleDetailsRepository)
        {
            _vehicleDetailsRepository = vehicleDetailsRepository;

        }

        // GET: api/<controller>
        [HttpGet("select/{VID}")]
        public async Task<ActionResult> Select(string VID)
        {
            _vehicleDetailsRepository.SetRequest(Request);
            var response = await _vehicleDetailsRepository.Select(VID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }
    }
}
