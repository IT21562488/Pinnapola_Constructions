import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient) { }

  _baseURL: String = "https://localhost:5001/api/Employee/Offer/";
  // https://localhost:5001/api/Employee/Offer/select/-999
  getOffer() {
    return this.httpClient.get<any>(this._baseURL + "select/-999");
  }

  getWeeklyOffer() {
    return this.httpClient.get<any>(this._baseURL + "selectWeekly/-999");
  }
  getMonthlyOffer() {
    return this.httpClient.get<any>(this._baseURL + "selectMonthly/-999");
  }
  getloyalityOffer() {
    return this.httpClient.get<any>(this._baseURL + "selectLoyality/-999");
  }


  postOffer(data: any) {
    return this.httpClient.post(this._baseURL + "Insert", data);
  }

  updateOffer(data: any) {
    return this.httpClient.post(this._baseURL + "Update", data);
  }

  deleteOffer(id: any) {
    return this.httpClient.delete(this._baseURL + "Delete?OfferID=" + id);
  }

  UploadImage(inputdata: any) {
    return this.httpClient.post(this._baseURL + "Upload", inputdata);
  }


}
