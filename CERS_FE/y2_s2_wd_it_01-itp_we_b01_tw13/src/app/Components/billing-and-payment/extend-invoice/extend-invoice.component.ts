import { Component, OnInit,Inject } from '@angular/core';
 import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvoiceModel } from '../../../Models/InvoiceModel';
import { InvoicesService } from 'src/app/Services/invoices.service';


@Component({
  selector: 'app-extend-invoice',
  templateUrl: './extend-invoice.component.html',
  styleUrls: ['./extend-invoice.component.css']
})
export class ExtendInvoiceComponent implements OnInit {
  dataInsert: InvoiceModel = new InvoiceModel();
  ExtendInvoice!: FormGroup;
  // employeeForm !: FormGroup;

  constructor(
     private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) 
     public editData: any, 
    private InvoicesService: InvoicesService, 
    private dialogRef : MatDialogRef<ExtendInvoiceComponent> 
  ) { }

  ngOnInit(): void {
     this.ExtendInvoice = this.formBuilder.group
    ({
      InvoiceNo : ['',Validators.required],
      InvoiceDate : ['',Validators.required],
      ProductName : ['',Validators.required],
      Samount : ['',Validators.required],
      PricepDay : ['',Validators.required],
      startDate : ['',Validators.required],
      endDate : ['',Validators.required],
      qty : ['',Validators.required]

    })
    
    console.log(this.editData)
    if(this.editData){
      
      this.ExtendInvoice.controls['InvoiceNo'].setValue(this.editData.invoiceID);
      this.ExtendInvoice.controls['InvoiceDate'].setValue(this.editData.invoiceDate);
      this.ExtendInvoice.controls['ProductName'].setValue(this.editData.productName);
      this.ExtendInvoice.controls['Samount'].setValue(this.editData.securityAmount);
      this.ExtendInvoice.controls['PricepDay'].setValue(this.editData.pricePerDay);
      this.ExtendInvoice.controls['startDate'].setValue(this.editData.startDate);
      this.ExtendInvoice.controls['endDate'].setValue(this.editData.endDate);
      this.ExtendInvoice.controls['qty'].setValue(this.editData.qty);

    }
  }
  setDataInsert(){
    this.dataInsert.InvoiceID = this.ExtendInvoice.value.invoiceID;
    this.dataInsert.InvoiceDate = this.ExtendInvoice.value.InvoiceDate;
    this.dataInsert.ProductName = this.ExtendInvoice.value.ProductName;
    this.dataInsert.SecurityAmount = this.ExtendInvoice.value.Samount;
    this.dataInsert.StartDate = this.ExtendInvoice.value.startDate;
    this.dataInsert.PricePerDay = this.ExtendInvoice.value.PricepDay;
    this.dataInsert.QTY = this.ExtendInvoice.value.qty;
    this.dataInsert.EndDate = this.ExtendInvoice.value.endDate;



    if(!this.editData){
      this.dataInsert.InvoiceID = 0;
    }else{
       this.dataInsert.InvoiceID = this.editData.invoiceID;
    }
  }

  updateEmployee(){
    this.setDataInsert();
    console.log(this.dataInsert);    
    this.InvoicesService.updateInvoice(this.dataInsert)
    .subscribe({
      next:(res)=>{
        alert("Invoice updated Successfully")
        this.ExtendInvoice.reset();
        this.dialogRef.close('update')
        window.location.reload();
      },
      error:()=>{
        alert("Error while Invoice update")
      }
    })
  }


}
