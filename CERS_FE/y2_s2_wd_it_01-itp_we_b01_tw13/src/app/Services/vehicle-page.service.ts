import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclePageService {

  constructor(private httpClient: HttpClient ) { }

  public dataToInsert: any;

  _baseURL : String = "https://localhost:5001/api/VehicleDetails/VehicleDetails/";
  _baseURL1 : String = "https://localhost:5001/api/RentalMaster/RentalMaster/";

  getVehicleDetails(){
    return this.httpClient.get<any>(this._baseURL + "select/VID0001");
  }

  createNewRental(data : any){
    return this.httpClient.post(this._baseURL1 + "Insert", data);
  }

  requestExtension(data : any){
    return this.httpClient.post(this._baseURL1 + "Update", data);
  }

}
