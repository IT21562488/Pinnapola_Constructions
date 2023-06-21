import { Component, OnInit } from '@angular/core';
import { TranscationService } from 'src/app/Services/transcation.service';
import { MatTableDataSource } from '@angular/material/table';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-billing-and-payment',
  templateUrl: './billing-and-payment.component.html',
  styleUrls: ['./billing-and-payment.component.css']
})


export class BillingAndPaymentComponent implements OnInit {

  displayedColumns: string[] = ["TranscationID", "TransacationDate", "Amount","TransacationMethod","SecurityAmount"];
  dataSource!: MatTableDataSource<any>;
  
  constructor(
   
    private transcationservice:TranscationService
  ) { }

  ngOnInit(): void {
    this.getAllTranscation();
  }



  getAllTranscation(){
    this.transcationservice.getTranscation().subscribe((res) => {
      this.dataSource = res.data;
      console.log("data" , res.data)
    },
    error => {
      console.log(error)
    })
  }
  

}
