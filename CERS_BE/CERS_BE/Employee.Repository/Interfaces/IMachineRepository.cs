using System;
using System.Collections.Generic;
using System.Text;
using Employee.Models;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Employee.Repository.Interfaces
{
    public interface IMachineRepository
    {
        Task<Response> Select(string MachineID);
        Task<Response> Insert(MachineClass machine);
        Task<Response> Update(MachineClass machine);
        Task<Response> Delete(string MachineID);
        void SetRequest(HttpRequest httpRequest);
    }
}
