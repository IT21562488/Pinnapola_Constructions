import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MachineryPageService {

  constructor(private httpClient: HttpClient ) { }

  public dataToInsert: any;
  public dataToInsert1: any;

  _baseURL : String = "https://localhost:5001/api/MachineDetails/MachineDetails/";
  _baseURL1 : String = "https://localhost:5001/api/RentalMaster/RentalMaster/";

  getMachineDetails(){
    return this.httpClient.get<any>(this._baseURL + "select/MID0001");
  }

  createNewRental(data : any){
    return this.httpClient.post(this._baseURL1 + "Insert", data);
  }

  requestExtension(data : any){
    return this.httpClient.post(this._baseURL1 + "Update", data);
  }
}
