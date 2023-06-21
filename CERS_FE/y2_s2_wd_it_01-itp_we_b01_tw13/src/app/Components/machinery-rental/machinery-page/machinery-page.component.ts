import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MachineryPageService } from 'src/app/Services/machinery-page.service';
import { MachineryRentalModel } from 'src/app/Models/MachineryRentalModel'; 


@Component({
  selector: 'app-machinery-page',
  templateUrl: './machinery-page.component.html',
  styleUrls: ['./machinery-page.component.css']
})
export class MachineryPageComponent implements OnInit {
  dataSource: any;
  machineryRentalForm !: FormGroup;
  dataToInsert: MachineryRentalModel = new MachineryRentalModel();
  UserID: number = 1;
  selectedDate: any;
  selectedDate1: any;

  constructor(
    private formBuilder: FormBuilder,
    private machineryPageService: MachineryPageService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getMachineDetails();

    this.machineryRentalForm = this.formBuilder.group({
      quantity : ['',Validators.required],
      toDate : ['',Validators.required],
      fromDate : ['',Validators.required]
    })
  }

  getMachineDetails(){
    this.machineryPageService.getMachineDetails().subscribe((res) => {
      this.dataSource = res.data;
      console.log("data" , res.data)
    },
    error => {
      console.log(error)
    })
  }

  setDataToInsert(){
    console.log('this.dataSource',this.dataSource)

    var toDate = new Date(this.datePipe.transform(this.machineryRentalForm.value.toDate, 'yyyy-MM-dd')).getTime()
    var fromDate = new Date(this.datePipe.transform(this.machineryRentalForm.value.fromDate, 'yyyy-MM-dd')).getTime()
    var dayDiff = toDate - fromDate
    var rentalPeriod = Math.floor(dayDiff / (1000 * 60 * 60 * 24)) + 1;
    console.log('rentalPeriod', rentalPeriod)

    this.dataToInsert.EqCatID = this.dataSource[0].categoryID;
    this.dataToInsert.SubCatID = this.dataSource[0].machineryCategoryID;
    this.dataToInsert.Quantity = this.machineryRentalForm.value.quantity;
    this.dataToInsert.FromDate = this.machineryRentalForm.value.fromDate;
    this.dataToInsert.ToDate = this.machineryRentalForm.value.toDate;
    this.dataToInsert.SecurityDeposit = this.dataSource[0].securityAmount * 1;
    this.dataToInsert.RentalAmount = this.dataSource[0].price * this.machineryRentalForm.value.quantity * rentalPeriod;
    this.dataToInsert.UserID = this.UserID;
    this.dataToInsert.EID = this.dataSource[0].mid;

    console.log('rental amt1', this.datePipe.transform(this.machineryRentalForm.value.toDate, 'yyyy-MM-dd'))
  }

  emitDataToInsert(){
    this.setDataToInsert();
    this.machineryPageService.dataToInsert1 = this.dataToInsert;
    console.log('this.machineryPageService.dataToInsert',this.machineryPageService.dataToInsert1)
  }

}
