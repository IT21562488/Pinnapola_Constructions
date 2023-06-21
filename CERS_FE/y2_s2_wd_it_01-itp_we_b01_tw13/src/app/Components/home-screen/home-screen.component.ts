import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  public cards = [];

  public ngOnInit(){
    this.cards = [
      { data: 'Vehicle Rental', img: '../../../assets/vr.jpeg', route: 'VehicleRental'},
      { data: 'Machinery Rental', img: '../../../assets/tr.jpg', route: 'MachineryRental'},
      { data: 'Vehicle Inventory Management', img: '../../../assets/vim.jpg', route: 'VehicleInventoryManagement'},
      { data: 'Machinery Inventory Management', img: '../../../assets/mim.jpg', route: 'MachineryInventoryManagement'},
      { data: 'Offers & Promotions', img: '../../../assets/op.jpg', route: 'OffersAndPromotions'},
      { data: 'Billing & Payment', img: '../../../assets/bp.jpg', route: 'BillingAndPayment'},
      { data: 'Employee Management', img: '../../../assets/emhr.jpg', route: 'EmployeeManagement'},
      { data: 'Feedback & Support', img: '../../../assets/fbs.jpg', route: 'FeedbackAndSupport'},
    ];
  }
  
  constructor() { }

}
