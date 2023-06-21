import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyRentalsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  _baseURL : String = "https://localhost:5001/api/MyRentals/MyRentals/";
  _baseURL1 : String = "https://localhost:5001/api/RentalMaster/RentalMaster/";

  getMyRentals(UserID, Type){
    return this.httpClient.get<any>(this._baseURL + "select/" + UserID + "/" + Type);
  }

  deleteExtension(RentalID: any) {
    return this.httpClient.delete(this._baseURL1 + "Delete?RentalID=" + RentalID);
  }
}
