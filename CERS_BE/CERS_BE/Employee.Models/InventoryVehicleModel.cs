using System;
using System.Collections.Generic;
using System.Text;

namespace Employee.Models
{
    public class InventoryVehicleModel
    {
        public string VehicleID { get; set; }
        public string Category { get; set; }
        public string VehicleName { get; set; }
        public string Description { get; set; }
        public int VehiclePrice { get; set; }
        public int Count { get; set; }
        public string PhotoFileName { get; set; }
    }
}
