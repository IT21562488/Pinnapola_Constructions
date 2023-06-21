import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleListService {

  constructor(private http:HttpClient) { }
  GetItem(catId){
    return this.http.get<any>("https://localhost:5001/api/Vehicle/select/"+catId)
  }
}
