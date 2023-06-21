using System;
using System.Collections.Generic;
using System.Text;
using Employee.Models;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Employee.Repository.Interfaces
{
    public interface IMyRentalsRepository
    {
        Task<Response> Select(int UserID, string Type);
        void SetRequest(HttpRequest httpRequest);
    }
}
