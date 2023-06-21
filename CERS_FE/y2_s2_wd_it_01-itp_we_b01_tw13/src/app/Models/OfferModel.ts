import { Binary } from "@angular/compiler";

export class OfferModel {
    
        OfferID:string;
        OfferType:string;
        OfferName:string;
        OfferDescription:string;
        OfferPeriod:string;
        OfferConditions:string;
        OfferDiscount:number=0;
        OfferMachineID:string;
        OfferVehicleID:string;
        PhotoFileName:string;
        // Content:Blob;
}