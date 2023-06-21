import { Component, OnInit, Inject } from '@angular/core';
import { VehiclePageService } from 'src/app/Services/vehicle-page.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleRentalModel } from '../../../Models/VehicleRentalModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.css']
})
export class VehiclePageComponent implements OnInit {
  dataSource: any;
  vehicleRentalForm !: FormGroup;
  dataToInsert: VehicleRentalModel = new VehicleRentalModel();
  UserID: number = 1;
  selectedDate: any;
  selectedDate1: any;

  constructor(
    private formBuilder: FormBuilder,
    private vehiclePageService: VehiclePageService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getVehicleDetails();

    this.vehicleRentalForm = this.formBuilder.group({
      quantity : ['',Validators.required],
      toDate : ['',Validators.required],
      fromDate : ['',Validators.required]
    })
  }

  getVehicleDetails(){
    this.vehiclePageService.getVehicleDetails().subscribe((res) => {
      this.dataSource = res.data;
      console.log("data" , res.data)
    },
    error => {
      console.log(error)
    })
  }

  setDataToInsert(){
    console.log('this.dataSource',this.dataSource)

    var toDate = new Date(this.datePipe.transform(this.vehicleRentalForm.value.toDate, 'yyyy-MM-dd')).getTime()
    var fromDate = new Date(this.datePipe.transform(this.vehicleRentalForm.value.fromDate, 'yyyy-MM-dd')).getTime()
    var dayDiff = toDate - fromDate
    var rentalPeriod = Math.floor(dayDiff / (1000 * 60 * 60 * 24)) + 1;
    console.log('rentalPeriod', rentalPeriod)

    this.dataToInsert.EqCatID = this.dataSource[0].categoryID;
    this.dataToInsert.SubCatID = this.dataSource[0].vehicleCategoryID;
    this.dataToInsert.Quantity = this.vehicleRentalForm.value.quantity;
    this.dataToInsert.FromDate = this.vehicleRentalForm.value.fromDate;
    this.dataToInsert.ToDate = this.vehicleRentalForm.value.toDate;
    this.dataToInsert.SecurityDeposit = this.dataSource[0].securityAmount * 1;
    this.dataToInsert.RentalAmount = this.dataSource[0].price * this.vehicleRentalForm.value.quantity * rentalPeriod;
    this.dataToInsert.UserID = this.UserID;
    this.dataToInsert.EID = this.dataSource[0].vid;

    console.log('rental amt1', this.datePipe.transform(this.vehicleRentalForm.value.toDate, 'yyyy-MM-dd'))
  }

  emitDataToInsert(){
    this.setDataToInsert();
    this.vehiclePageService.dataToInsert = this.dataToInsert;
    console.log('this.vehiclePageService.dataToInsert',this.vehiclePageService.dataToInsert)
  }

}
