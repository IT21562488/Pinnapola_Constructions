using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;
using Employee.Models;

namespace Employee.Repository
{
    public class ResponseService
    {
        public Response GetSuccessResponse()
        {
            return new Response() { Success = true, Message = "Success", ErrorType = "NA" };
        }

        public Response GetSuccessResponse(object data)
        {
            return new Response() { Success = true, Message = "Success", ErrorType = "NA", Data = data };
        }

        public Response GetErrorResponse(SqlException ex)
        {
            if (ex.Number == 50005)
            {
                return new Response() { Success = false, Message = ex.Message, ErrorType = "VAL", Data = ex, ExceptionNumber = ex.Number };
            }

            return GetErrorResponse((Exception)ex);
        }

        public Response GetErrorResponse(Exception ex)
        {
            return new Response() { Success = false, Message = ex.Message, ErrorType = "EX" };
        }
    }
}
