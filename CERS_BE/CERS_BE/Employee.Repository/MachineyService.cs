using System;
using Dapper;
using Microsoft.AspNetCore.Http;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Employee.Models;
using Employee.Repository.Interfaces;



namespace Employee.Repository
{
    public class mchineryService : IMachinery
    {
        HttpRequest _request;

        private readonly string _connectionString;

        public mchineryService(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void SetRequest(HttpRequest request)
        {
            this._request = request;
        }

        public async Task<Response> Select(int MID)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    DynamicParameters para = new DynamicParameters();

                    para.Add("@MachineCatID", MID);
                    var results = await connection.QueryAsync<vehicleClass>("[dbo].[SelectMachineByMachineCategory]", para, commandType: CommandType.StoredProcedure);
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