using System;
using System.Collections.Generic;
using System.Text;

namespace Employee.Models
{
    public class RentalMasterClass
    {
        public int RentalID { get; set; }
        public int? EqCatID { get; set; }
        public int? SubCatID { get; set; }
        public string EID { get; set; }
        public int? Quantity { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public float? SecurityDeposit { get; set; }
        public float RentalAmount { get; set; }
        public int? UserID { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime ExtensionDate { get; set; }

    }
}
