import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoicesService } from 'src/app/Services/invoices.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ExtendInvoiceComponent } from '../extend-invoice/extend-invoice.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  displayedColumns: string[] = ["InvoiceID", "InvoiceDate", "ProductName", "SecurityAmount","StartDate","EndDate","QTY","PricePerDay","action"];
  dataSource!: MatTableDataSource<any>;
   
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(
    public dialog: MatDialog,
    private Invoiceservice:InvoicesService
  ) { }

  ngOnInit(): void {
    this.getAllInvices();
  }
  openDialog() {
    this.dialog.open(ExtendInvoiceComponent, {
      width: '52%',
      height:'98%'
     
    });
  }

  getAllInvices(){
    this.Invoiceservice.getInvoices().subscribe((res) => {
      this.dataSource = res.data;
      console.log("data" , res.data)
    },
    error => {
      console.log(error)
    })
  }
  extendInvoice(row: any){
    this.dialog.open(ExtendInvoiceComponent,{
      width:'52%',
      height:'98%',
      data:row
    })
  }
  

}

