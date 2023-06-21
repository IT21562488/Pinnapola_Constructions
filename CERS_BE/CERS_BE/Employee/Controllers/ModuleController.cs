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
    [Route("api/Module/[controller]")]
    [ApiController]
    public class ModuleController : ControllerBase
    {
        private readonly IModuleRepository _moduleRepository;

        public ModuleController(IModuleRepository moduleRepository)
        {
            _moduleRepository = moduleRepository;

        }

        // GET: api/<controller>
        [HttpGet("select/{ModuleID}")]
        public async Task<ActionResult> Select(int ModuleID)
        {
            _moduleRepository.SetRequest(Request);
            var response = await _moduleRepository.Select(ModuleID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }
    }
}
