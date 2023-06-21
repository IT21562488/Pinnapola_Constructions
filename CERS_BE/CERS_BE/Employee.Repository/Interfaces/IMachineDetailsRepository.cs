using System;
using System.Collections.Generic;
using System.Text;
using Employee.Models;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Employee.Repository.Interfaces
{
    public interface IMachineDetailsRepository
    {
        Task<Response> Select(string MID);
        void SetRequest(HttpRequest httpRequest);
    }
}
