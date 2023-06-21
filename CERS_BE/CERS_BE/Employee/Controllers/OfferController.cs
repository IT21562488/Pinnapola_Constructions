using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Employee.Models;
using Employee.Repository.Interfaces;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace Employee.API.Controllers
{
    [Route("api/Employee/[controller]")]
    [ApiController]
    public class OfferController : ControllerBase
    {
        private readonly IOfferRepository _offerRepository;
      

        public OfferController(IOfferRepository offerRepository)
        {
            _offerRepository = offerRepository;

        }


        // GET: api/<controller>
        [HttpGet("select/{OfferID}")]
        public async Task<ActionResult> Select(string OfferID)
        {
            _offerRepository.SetRequest(Request);
            var response = await _offerRepository.Select(OfferID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }
        // GET: api/<controller>
        [HttpGet("selectWeekly/{OfferID}")]
        public async Task<ActionResult> SelectWeekly(string OfferID)
        {
            _offerRepository.SetRequest(Request);
            var response = await _offerRepository.Selectweekly(OfferID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }
        // GET: api/<controller>
        [HttpGet("selectMonthly/{OfferID}")]
        public async Task<ActionResult> SelectMonthly(string OfferID)
        {
            _offerRepository.SetRequest(Request);
            var response = await _offerRepository.SelectMonthly(OfferID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }

        // GET: api/<controller>
        [HttpGet("selectLoyality/{OfferID}")]
        public async Task<ActionResult> SelectLoyality(string OfferID)
        {
            _offerRepository.SetRequest(Request);
            var response = await _offerRepository.SelectLoyality(OfferID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }

        // POST api/<controller>
        [HttpPost("Insert")]
        public async Task<ActionResult> Insert(OfferClass offer)
        {
            _offerRepository.SetRequest(Request);
            var response = await _offerRepository.Insert(offer);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }

        // PUT api/<controller>/5
        [HttpPost("Update")]
        public async Task<ActionResult> Update(OfferClass offer)
        {
            _offerRepository.SetRequest(Request);
            var response = await _offerRepository.Update(offer);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }

        // DELETE api/<controller>/5
        [HttpDelete("Delete")]
        public async Task<ActionResult> Delete(string OfferID)
        {
            _offerRepository.SetRequest(Request);
            var response = await _offerRepository.Delete(OfferID);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }

       








    }
}
