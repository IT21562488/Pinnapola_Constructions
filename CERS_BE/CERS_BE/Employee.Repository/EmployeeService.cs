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
    public class EmployeeService : IEmployeeRepository
    {
        HttpRequest _request;

        private readonly string _connectionString;

        public EmployeeService(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void SetRequest(HttpRequest request)
        {
            this._request = request;
        }

        public async Task<Response> Select(int EmpID)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    DynamicParameters para = new DynamicParameters();

                    para.Add("@EmpID", EmpID);
                    var results = await connection.QueryAsync<EmployeeClass>("[dbo].[SelectEmployee]", para, commandType: CommandType.StoredProcedure);
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

        public async Task<Response> Insert(EmployeeClass employee)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    DynamicParameters para = new DynamicParameters();
                    string JsonData = JsonConvert.SerializeObject(employee);
                    para.Add("@JsonData", JsonData, DbType.String);
                    para.Add("@Operation", "I", DbType.String);

                    var results = await connection.QueryAsync<EmployeeClass>("[dbo].[InsertUpdateEmployee]", para, commandType: CommandType.StoredProcedure);
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

        public async Task<Response> Update(EmployeeClass employee)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    DynamicParameters para = new DynamicParameters();
                    string JsonData = JsonConvert.SerializeObject(employee);
                    para.Add("@JsonData", JsonData);
                    para.Add("@Operation", "U");
                    var results = await connection.QueryAsync<EmployeeClass>("[dbo].[InsertUpdateEmployee]", para, commandType: CommandType.StoredProcedure);
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

        public async Task<Response> Delete(int EmpID)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    DynamicParameters para = new DynamicParameters();
                    para.Add("@EmpID", EmpID);
                    var results = await connection.QueryAsync<EmployeeClass>("[dbo].[DeleteEmployee]", para, commandType: CommandType.StoredProcedure);
                    return new ResponseService().GetSuccessResponse();
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
