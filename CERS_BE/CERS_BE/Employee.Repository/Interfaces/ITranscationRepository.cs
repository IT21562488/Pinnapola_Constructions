using Employee.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Repository.Interfaces
{
    public interface ITranscationRepository
    {
        Task<Response> Select(int TranscationID);
        Task<Response> Insert(TranscationClass transcation);
        void SetRequest(HttpRequest httpRequest);
    }
}
