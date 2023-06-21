using System;
using System.Collections.Generic;
using System.Text;

namespace Employee.Models
{
    public class InvoiceClass
    {
        public int InvoiceID { get; set; }
        public DateTime InvoiceDate { get; set; }
        public String ProductName { get; set; }
        public Decimal SecurityAmount { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int QTY { get; set; }
        public Decimal PricePerDay { get; set; }
    }
}
