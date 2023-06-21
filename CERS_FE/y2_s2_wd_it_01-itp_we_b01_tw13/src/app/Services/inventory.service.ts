import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private httpClient: HttpClient ) { }

  _baseURL : String = "https://localhost:5001/api/Employee/";
  // https://localhost:5001/api/Employee/Machine/select/-999
  getMachine(){
    return this.httpClient.get<any>(this._baseURL + "Machine/select/-999");
  }

  postMachine(data : any){
    return this.httpClient.post(this._baseURL + "Machine/Insert" , data);
  }

  updateMachine(data : any){
    return this.httpClient.post(this._baseURL + "Machine/Update" , data);
  }

  deleteMachine(id: any) {
    return this.httpClient.delete(this._baseURL + "Machine/Delete?MachineID=" + id);
  }

  getVehicle(){
    return this.httpClient.get<any>(this._baseURL + "InventoryVehicle/select/-999");
  }

  postVehicle(data : any){
    return this.httpClient.post(this._baseURL + "InventoryVehicle/Insert" , data);
  }

  updateVehicle(data : any){
    return this.httpClient.post(this._baseURL + "InventoryVehicle/Update" , data);
  }

  deleteVehicle(id: any) {
    return this.httpClient.delete(this._baseURL + "InventoryVehicle/Delete?VehicleID=" + id);
  }
}


