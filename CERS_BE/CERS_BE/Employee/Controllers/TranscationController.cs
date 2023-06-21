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
    [Route("api/Employee/[controller]")]
    [ApiController]
    public class TranscationController : ControllerBase
    {

        private readonly ITranscationRepository _TranscationRepository;

        public TranscationController(ITranscationRepository TranscationRepository)
        {
            _TranscationRepository = TranscationRepository;

        }

        // GET: api/<controller>
        [HttpGet("select/{TranscationID}")]
        public async Task<ActionResult> Select(int TranscationID)
        {
            _TranscationRepository.SetRequest(Request);
            var response = await _TranscationRepository.Select(TranscationID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }

        // POST api/<controller>
        [HttpPost("Insert")]
        public async Task<ActionResult> Insert(TranscationClass transcation)
        {
            _TranscationRepository.SetRequest(Request);
            var response = await _TranscationRepository.Insert(transcation);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }



    }
}