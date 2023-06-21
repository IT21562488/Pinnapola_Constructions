import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Services/offer.service';

@Component({
  selector: 'app-show-cus-loyality',
  templateUrl: './show-cus-loyality.component.html',
  styleUrls: ['./show-cus-loyality.component.css']
})
export class ShowCusLoyalityComponent implements OnInit {
  title='Filehandling'
  LoyalityOfferList:any;
  public cards = [];
  constructor(private offerService: OfferService) {
    this.GetallOffers();
   }

   GetallOffers(){
    this.offerService.getloyalityOffer().subscribe(result=>{
    this.LoyalityOfferList=result.data;
    console.log('LoyalityOfferList', this.LoyalityOfferList);
    });
   }
  public ngOnInit(){
  
  }


}
