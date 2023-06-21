import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranscationService {

  constructor(private httpClient: HttpClient) { }

  _baseURL : String = "https://localhost:5001/api/Employee/Transcation/";
  //https://localhost:5001/api/Employee/Transcation/select/-999
  
  getTranscation(){
    return this.httpClient.get<any>(this._baseURL + "select/-999");
  }
  postTranscation(data : any){
  return this.httpClient.post(this._baseURL + "Insert" , data);
}


}
