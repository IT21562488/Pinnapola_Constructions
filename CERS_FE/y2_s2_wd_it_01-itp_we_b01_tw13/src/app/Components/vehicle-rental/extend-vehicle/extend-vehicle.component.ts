import { ActivatedRoute } from '@angular/router';import { Component, OnInit, Inject } from '@angular/core';
import { VehiclePageService } from 'src/app/Services/vehicle-page.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleRentalModel } from '../../../Models/VehicleRentalModel';

@Component({
  selector: 'app-extend-vehicle',
  templateUrl: './extend-vehicle.component.html',
  styleUrls: ['./extend-vehicle.component.css']
})
export class ExtendVehicleComponent implements OnInit {
  extendData: any;
  extendVehicleRentalForm !: FormGroup;
  dataToUpdate: VehicleRentalModel = new VehicleRentalModel();
  selectedDate: any;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder, 
    private vehiclePageService: VehiclePageService) { 
    this.route.params.subscribe(params => {
      this.extendData = params;
    });
  }

  ngOnInit(): void {
    console.log('extendData', this.extendData)

    this.extendVehicleRentalForm = this.formBuilder.group({
      toDate : [this.extendData.toDate, Validators.required],
      fromDate : [this.extendData.fromDate,Validators.required]
    })
    
  }

  setDataToUpdate(){
    this.dataToUpdate.RentalID = this.extendData.rentalID;
    this.dataToUpdate.FromDate = this.extendData.fromDate;
    this.dataToUpdate.ToDate = this.extendVehicleRentalForm.value.toDate;
    this.dataToUpdate.RentalAmount = this.extendData.rentalAmount;
  }

  requestExtension(){
    this.setDataToUpdate();
    this.vehiclePageService.requestExtension(this.dataToUpdate)
    .subscribe({
      next:(res)=>{
        alert("Extension requested Successfully")
        this.extendVehicleRentalForm.reset();
        window.location.reload();
      },
      error:()=>{
        alert("Error while requesting")
      }
    })
  }

}
