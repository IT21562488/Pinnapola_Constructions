
import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Services/offer.service';

@Component({
  selector: 'app-show-cus-offer',
  templateUrl: './show-cus-offer.component.html',
  styleUrls: ['./show-cus-offer.component.css']
})
export class ShowCusOfferComponent implements OnInit {
  
  title='Filehandling'
  WeeklyOfferList:any;
  public cards = [];
  constructor(private offerService: OfferService) {
    this.GetallOffers();
   }

   GetallOffers(){
    this.offerService.getWeeklyOffer().subscribe(result=>{
    this.WeeklyOfferList=result.data;
    console.log('MonthlyOfferList', this.WeeklyOfferList);
    });
   }
  public ngOnInit(){
  
  }


}
