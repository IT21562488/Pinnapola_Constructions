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
    [Route("api/MyRentals/[controller]")]
    [ApiController]
    public class MyRentalsController : ControllerBase
    {
        private readonly IMyRentalsRepository _myRentalsRepository;

        public MyRentalsController(IMyRentalsRepository myRentalsRepository)
        {
            _myRentalsRepository = myRentalsRepository;

        }

        // GET: /<controller>/
        [HttpGet("select/{UserID}/{Type}")]
        public async Task<ActionResult> Select(int UserID, string Type)
        {
            _myRentalsRepository.SetRequest(Request);
            var response = await _myRentalsRepository.Select(UserID, Type);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }
    }
}
