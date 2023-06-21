import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MachineryItemService {

  constructor(private http:HttpClient) { }
  GetItem(){
    return this.http.get<any>("https://localhost:5001/api/machinery/select/3")
  }
}
