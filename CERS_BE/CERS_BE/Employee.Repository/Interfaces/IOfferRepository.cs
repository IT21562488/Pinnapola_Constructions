using System;
using System.Collections.Generic;
using System.Text;
using Employee.Models;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Employee.Repository.Interfaces
{
    public interface IOfferRepository
    {
        Task<Response> Select(string OfferID);
        Task<Response> Selectweekly(string OfferID);
        Task<Response> SelectMonthly(string OfferID);
        Task<Response> SelectLoyality(string OfferID);

        Task<Response> Insert(OfferClass offer);
        Task<Response> Update(OfferClass offer);
        Task<Response> Delete(string OfferID);
    
        void SetRequest(HttpRequest httpRequest);
    }
}
