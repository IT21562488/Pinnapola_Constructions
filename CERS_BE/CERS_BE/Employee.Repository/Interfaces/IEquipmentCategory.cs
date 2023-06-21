using System;
using System.Collections.Generic;
using System.Text;
using Employee.Models;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Employee.Repository.Interfaces
{
    public interface IEquipmentCategory
    {
        Task<Response> Select(int EquipmentCatID);
        void SetRequest(HttpRequest httpRequest);
    }
}
