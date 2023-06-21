using System;
using System.Collections.Generic;
using System.Text;
using Dapper;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;
using Employee.Models;
using Employee.Repository.Interfaces;
namespace Employee.Repository
{
    public class TranscationServices : ITranscationRepository
    {
        HttpRequest _request;

        private readonly string _connectionString;

        public object TranscationID { get; private set; }

        public TranscationServices(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void SetRequest(HttpRequest request)
        {
            this._request = request;
        }

        public async Task<Response> Select(int TranscationID)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    DynamicParameters para = new DynamicParameters();

                    para.Add("@TID", TranscationID);
                    var results = await connection.QueryAsync<TranscationClass>("[dbo].[SelectPayments]", para, commandType: CommandType.StoredProcedure);
                    return new ResponseService().GetSuccessResponse(results);
                }
            }
            catch (SqlException ex)
            {
                return new ResponseService().GetErrorResponse(ex);
            }
            catch (Exception ex)
            {
                return new ResponseService().GetErrorResponse(ex);
            }
        }

        public async Task<Response> Insert(TranscationClass transcation)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    DynamicParameters para = new DynamicParameters();
                    string JsonData = JsonConvert.SerializeObject(transcation);
                    para.Add("@JsonData", JsonData, DbType.String);
                    para.Add("@Operation", "I", DbType.String);

                    var results = await connection.QueryAsync<TranscationClass>("[dbo].[InsertTranscation]", para, commandType: CommandType.StoredProcedure);
                    return new ResponseService().GetSuccessResponse(results);
                }
            }
            catch (SqlException ex)
            {
                return new ResponseService().GetErrorResponse(ex);
            }
            catch (Exception ex)
            {
                return new ResponseService().GetErrorResponse(ex);
            }
        }

    }
}
