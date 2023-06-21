using System;
using System.Collections.Generic;
using System.Text;

namespace Employee.Models
{
    public class TranscationClass
    {

        public int TranscationID { get; set; }
        public DateTime TranscationDate { get; set; }
        public Decimal Amount { get; set; }
        public String TranscationMethod { get; set; }
        public Decimal SecurityAmount { get; set; }
    }
}
