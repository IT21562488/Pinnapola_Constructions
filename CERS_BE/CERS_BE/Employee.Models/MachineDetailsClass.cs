using System;
using System.Collections.Generic;
using System.Text;

namespace Employee.Models
{
    public class MachineDetailsClass
    {
        public int ID { get; set; }
        public string prefix { get; set; }
        public string MID { get; set; }
        public string category { get; set; }
        public string Name { get; set; }
        public string description { get; set; }
        public string price { get; set; }
        public string count { get; set; }
        public int CategoryID { get; set; }
        public int MachineryCategoryID { get; set; }
        public string MachineCategoryDescription { get; set; }
        public string SecurityAmount { get; set; }
        public string Feature1 { get; set; }
        public string Feature2 { get; set; }
        public string Feature3 { get; set; }
        public string ImagePath { get; set; }
    }
}
