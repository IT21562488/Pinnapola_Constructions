import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private httpClient: HttpClient) { }

  
  _baseURL : String = "https://localhost:5001/api/Employee/Invoice/";
  //https://localhost:5001/api/Employee/Transcation/select/-999
  // https://localhost:5001/api/Employee/Invoice/Update

  
  getInvoices(){
    return this.httpClient.get<any>(this._baseURL + "select/-999");
  }

  updateInvoice(data : any){
  return this.httpClient.post(this._baseURL + "Update" , data);
}
  postInvoice(data : any){
  return this.httpClient.post(this._baseURL + "Insert" , data);
}

}
