import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MachineryCatService {

  constructor(private http:HttpClient) { }
  GetCategory(){
    return this.http.get<any>("https://localhost:5001/api/EquipmentCategory/EquipmentCategory/select/2")
  }
}
