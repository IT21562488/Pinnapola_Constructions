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
    [Route("api/EquipmentCategory/[controller]")]
    [ApiController]
    public class EquipmentCategoryController : ControllerBase
    {
        private readonly IEquipmentCategory _EquipmentCategory;

        public EquipmentCategoryController(IEquipmentCategory EquipmentCategory)
        {
            _EquipmentCategory = EquipmentCategory;

        }

        // GET: api/<controller>
        [HttpGet("select/{EquipmentCatID}")]
        public async Task<ActionResult> Select(int EquipmentCatID)
        {
            _EquipmentCategory.SetRequest(Request);
            var response = await _EquipmentCategory.Select(EquipmentCatID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }
    }
}