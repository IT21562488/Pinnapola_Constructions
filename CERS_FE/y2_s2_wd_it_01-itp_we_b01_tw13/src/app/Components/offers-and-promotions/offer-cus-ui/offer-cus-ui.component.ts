import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-cus-ui',
  templateUrl: './offer-cus-ui.component.html',
  styleUrls: ['./offer-cus-ui.component.css']
})
export class OfferCusUIComponent implements OnInit {

  public cards = [];

  public ngOnInit(){
    this.cards = [
      { data: '', img: '../../../assets/OfferImages/weekOffer.png', route: 'ShowCusOffer'},
      { data: '', img: '../../../assets/OfferImages/dealMonth.jpg', route: 'ShowCusMonthly'},
      { data: '', img: '../../../assets/OfferImages/customer-loyalty.jpg', route: 'ShowCusLoyality'},

      
     
    ];
  }
  
  constructor() { }
}
