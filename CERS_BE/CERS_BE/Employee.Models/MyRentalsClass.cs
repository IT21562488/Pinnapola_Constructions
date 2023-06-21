using System;
using System.Collections.Generic;
using System.Text;

namespace Employee.Models
{
    public class MyRentalsClass
    {
        public int RentalID { get; set; }
        public int CategoryID { get; set; }
        public string EquipmentCategory { get; set; }
        public int MachCatID { get; set; }
        public string MachineryCategory { get; set; }
        public int Quantity { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public float SecurityDeposit { get; set; }
        public float RentalAmount { get; set; }
        public string EquipmentDescription { get; set; }
        public DateTime CreateDate { get; set; }        
        public DateTime? NewDate { get; set; }
        public string ImagePath { get; set; }
    }
}