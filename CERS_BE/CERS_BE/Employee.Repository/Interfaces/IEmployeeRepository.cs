using System;
using System.Collections.Generic;
using System.Text;
using Employee.Models;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Employee.Repository.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<Response> Select(int EmpID);
        Task<Response> Insert(EmployeeClass employee);
        Task<Response> Update(EmployeeClass employee);
        Task<Response> Delete(int EmpID);
        void SetRequest(HttpRequest httpRequest);
    }
}
