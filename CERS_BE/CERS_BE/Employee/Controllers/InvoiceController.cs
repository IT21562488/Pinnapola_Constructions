using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Employee.Repository.Interfaces;
using Employee.Models;
//using PdfSharpCore;
//using PdfSharpCore.Pdf;
//using TheArtOfDev.HtmlRenderer.PdfSharp;
//using System.IO;

namespace Employee.API.Controllers
{
    [Route("api/Employee/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {

        public readonly IInvoiceRepository _InvoiceRepository;
        private byte[] response;

        public InvoiceController(IInvoiceRepository InvoiceRepository)
        {
            _InvoiceRepository = InvoiceRepository;

        }

        // GET: api/<controller>
        [HttpGet("select/{InvoiceID}")]
        public async Task<ActionResult> Select(int InvoiceID)
        {
            _InvoiceRepository.SetRequest(Request);
            var response = await _InvoiceRepository.Select(InvoiceID);

            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);
        }

        // POST api/<controller>
        [HttpPost("Insert")]
        public async Task<ActionResult> Insert(InvoiceClass invoice)
        {
            _InvoiceRepository.SetRequest(Request);
            var response = await _InvoiceRepository.Insert(invoice);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }

        // PUT api/<controller>/5
        [HttpPost("Update")]
        public async Task<ActionResult> Update(InvoiceClass invoice)
        {
            _InvoiceRepository.SetRequest(Request);
            var response = await _InvoiceRepository.Update(invoice);
            if (response.Success)
                return Ok(response);
            else
                return StatusCode(StatusCodes.Status500InternalServerError, response);

        }




    }
}