import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Services/offer.service';
import { OfferModel } from 'src/app/Models/OfferModel';

@Component({
  selector: 'app-show-cus-monthly',
  templateUrl: './show-cus-monthly.component.html',
  styleUrls: ['./show-cus-monthly.component.css']
})
export class ShowCusMonthlyComponent implements OnInit {

  
  MonthlyOfferList:any;
  public cards = [];
  Data:OfferModel = new OfferModel();
  constructor(private offerService: OfferService) {
    this.GetallOffers();
   }

   GetallOffers(){
    this.offerService.getMonthlyOffer().subscribe(result=>{
      this.MonthlyOfferList=result.data;
      console.log('MonthlyOfferList', this.MonthlyOfferList);
      
    });
   }
  public ngOnInit(){
  
  }

}
