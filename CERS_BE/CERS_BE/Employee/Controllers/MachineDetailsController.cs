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
    [Route("api/MachineDetails/[controller]")]
    [ApiController]
    public class MachineDetailsController : Controller
    {
        private readonly IMachineDetailsRepository _machineDetailsRepository;

        public MachineDetailsController(IMachineDetailsRepository machineDetailsRepository)
        {
            _machineDetailsRepository = machineDetailsRepository;

        }

        // GET: api/<controller>
        [HttpGet("select/{MID}")]
        public async Task<ActionResult> Select(string MID)
        {
            _machineDetailsRepository.SetRequest(Request);
            var response = await _machineDetailsRepository.Select(MID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }
    }
}
