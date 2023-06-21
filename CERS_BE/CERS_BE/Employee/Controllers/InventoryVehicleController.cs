using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Employee.Models;
using Employee.Repository.Interfaces;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Employee.API.Controllers
{
    [Route("api/Employee/[controller]")]
    [ApiController]

    public class InventoryVehicleController : Controller
    {
        private readonly IVehicleRepository _vehicleRepository;

        public InventoryVehicleController(IVehicleRepository vehicleRepository)
        {
            _vehicleRepository = vehicleRepository;

        }

        // GET: api/<controller>
        [HttpGet("select/{VehicleID}")]
        public async Task<ActionResult> Select(string VehicleID)
        {
            _vehicleRepository.SetRequest(Request);
            var response = await _vehicleRepository.Select(VehicleID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }

        // POST api/<controller>
        [HttpPost("Insert")]
        public async Task<ActionResult> Insert(InventoryVehicleModel vehicle)
        {
            _vehicleRepository.SetRequest(Request);
            var response = await _vehicleRepository.Insert(vehicle);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }

        // PUT api/<controller>/5
        [HttpPost("Update")]
        public async Task<ActionResult> Update(InventoryVehicleModel vehicle)
        {
            _vehicleRepository.SetRequest(Request);
            var response = await _vehicleRepository.Update(vehicle);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }

        // DELETE api/<controller>/5
        [HttpDelete("Delete")]
        public async Task<ActionResult> Delete(string VehicleID)
        {
            _vehicleRepository.SetRequest(Request);
            var response = await _vehicleRepository.Delete(VehicleID);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }
    }
}
