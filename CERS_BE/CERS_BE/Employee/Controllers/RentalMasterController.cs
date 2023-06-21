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
    [Route("api/RentalMaster/[controller]")]
    [ApiController]
    public class RentalMasterController : ControllerBase
    {
        private readonly IRentalMasterRepository _rentalMasterRepository;

        public RentalMasterController(IRentalMasterRepository rentalMasterRepository)
        {
            _rentalMasterRepository = rentalMasterRepository;

        }

        // POST api/<controller>
        [HttpPost("Insert")]
        public async Task<ActionResult> Insert(RentalMasterClass rentalMaster)
        {
            _rentalMasterRepository.SetRequest(Request);
            var response = await _rentalMasterRepository.Insert(rentalMaster);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }

        // PUT api/<controller>/5
        [HttpPost("Update")]
        public async Task<ActionResult> Update(RentalMasterClass rentalMaster)
        {
            _rentalMasterRepository.SetRequest(Request);
            var response = await _rentalMasterRepository.Update(rentalMaster);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }

        // DELETE api/<controller>/5
        [HttpDelete("Delete")]
        public async Task<ActionResult> Delete(int RentalID)
        {
            _rentalMasterRepository.SetRequest(Request);
            var response = await _rentalMasterRepository.Delete(RentalID);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }
    }
}
