using System;
using System.Collections.Generic;
using System.Text;

namespace Employee.Models
{
    public class EmployeeClass
    {
        public int EmpID { get; set; }
        public string NIC { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DOB { get; set; }
        public string MaritalStatus { get; set; }
        public string Gender { get; set; }
    }
}
