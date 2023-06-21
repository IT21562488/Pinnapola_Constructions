using System;
using System.Collections.Generic;
using System.Text;
using Employee.Models;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Employee.Repository.Interfaces
{
    public interface IRentalMasterRepository
    {
        Task<Response> Insert(RentalMasterClass rentalMaster);
        Task<Response> Update(RentalMasterClass rentalMaster);
        Task<Response> Delete(int RentalID);
        void SetRequest(HttpRequest httpRequest);
    }
}
