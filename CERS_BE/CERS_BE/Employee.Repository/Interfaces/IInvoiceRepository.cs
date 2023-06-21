using Employee.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace Employee.Repository.Interfaces
{
    public interface IInvoiceRepository
    {
        Task<Response> Select(int InvoiceID);
        Task<Response> Insert(InvoiceClass invoice);
        Task<Response> Update(InvoiceClass invoice);
        void SetRequest(HttpRequest httpRequest);
    }
}
