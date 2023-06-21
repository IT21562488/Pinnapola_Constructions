import { Component, OnInit,Inject } from '@angular/core';
import { PayAuthenticationComponent } from '../pay-authentication/pay-authentication.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InvoiceModel } from 'src/app/Models/InvoiceModel';
import { TranscationModel } from 'src/app/Models/TranscationModel';
import { InvoicesService } from 'src/app/Services/invoices.service';
import { TranscationService } from 'src/app/Services/transcation.service';
 import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  dataInsert: InvoiceModel = new InvoiceModel();
  dataInsert2:TranscationModel = new TranscationModel();
  InsertTrnascationInvoice: FormGroup;
  public editData: any;
  dialogRef: any;
  
 

  constructor(
    private formBuilder: FormBuilder,

   private InvoicesService: InvoicesService,
   private TranscationService: TranscationService,

  ) { }

  ngOnInit(): void {
    this.InsertTrnascationInvoice = this.formBuilder.group
    ({
      qty : ['',Validators.required],
      FromDate : ['',Validators.required],
      Enddate : ['',Validators.required],
      Securedeposit : ['',Validators.required],
      perdayCost : ['',Validators.required],
      Totalamount : ['',Validators.required],
      Duration : ['',Validators.required],
      Rentalcost : ['',Validators.required],
      transcationMethod : ['',Validators.required]
      //productName:['',Validators.required]
     
    });

    this.InsertTrnascationInvoice.get('Duration').valueChanges.subscribe(() => {
      this.calculateRentalCost();
    });
    
    this.InsertTrnascationInvoice.get('perdayCost').valueChanges.subscribe(() => {
      this.calculateRentalCost();
    });

    this.InsertTrnascationInvoice.get('Rentalcost').valueChanges.subscribe(() => {
      this.calculateTotalAmount();
    });
  
    this.InsertTrnascationInvoice.get('Securedeposit').valueChanges.subscribe(() => {
      this.calculateTotalAmount();
    });
   // const currentDate = new Date();

    
  }
  setDataInsert(){
    // this.dataInsert.InvoiceID = this.InsertTrnascationInvoice.value.invoiceID;
    this.dataInsert.InvoiceDate = this.InsertTrnascationInvoice.value.FromDate ;
    //this.dataInsert.ProductName = this.InsertTrnascationInvoice.value.productName;
    this.dataInsert.SecurityAmount = this.InsertTrnascationInvoice.value.Securedeposit;
    this.dataInsert.StartDate = this.InsertTrnascationInvoice.value.FromDate;
    this.dataInsert.PricePerDay = this.InsertTrnascationInvoice.value.perdayCost;
    this.dataInsert.QTY = this.InsertTrnascationInvoice.value.qty;
    this.dataInsert.EndDate = this.InsertTrnascationInvoice.value.Enddate;
     
    //Transcation
    this.dataInsert2.TranscationMethod = this.InsertTrnascationInvoice.value.transcationMethod;
    this.dataInsert2.SecurityAmount = this.InsertTrnascationInvoice.value.Securedeposit;
    this.dataInsert2.TranscationDate = this.InsertTrnascationInvoice.value.FromDate;
    this.dataInsert2.Amount = this.InsertTrnascationInvoice.value.Totalamount;

  }
 

  inserttest(){
    this.setDataInsert();
    
    this.InvoicesService.postInvoice(this.dataInsert)
      .subscribe({
        next:(res)=>{
          // Insert transaction data after successfully inserting the invoice data
          //this.dataInsert2.InvoiceID = res.InvoiceID;
          this.TranscationService.postTranscation(this.dataInsert2)
            .subscribe({
              next: (res) => {
                alert("Payment successful.Thank you!");
                // this.router.navigate(['AddNewCard']);
                this.InsertTrnascationInvoice.reset();
                // this.dialogRef.close('update');
                window.location.reload();
              },
              error: (err) => {
                console.log(err);
                alert("Error while Inserting transaction data");
              }
            });
        },
        error:()=>{
          alert("Error while Inserting invoice data");
        }
      });
  }

  calculateDuration() {
    const startDate = new Date(this.InsertTrnascationInvoice.controls['FromDate'].value);
    const endDate = new Date(this.InsertTrnascationInvoice.controls['Enddate'].value);
    const duration = endDate.getTime() - startDate.getTime();
    const days = Math.ceil(duration / (1000 * 3600 * 24)); // convert duration to days
    this.InsertTrnascationInvoice.controls['Duration'].setValue(days); // set the duration control value
  }


  calculateRentalCost() {
    const duration = this.InsertTrnascationInvoice.controls['Duration'].value;
    const perDayCost = this.InsertTrnascationInvoice.controls['perdayCost'].value;
    const qty = this.InsertTrnascationInvoice.controls['qty'].value;
    const rentalCost = duration * perDayCost * qty;
    this.InsertTrnascationInvoice.controls['Rentalcost'].setValue(rentalCost);;
    
  }
  calculateTotalAmount() {
    const rentalCost = this.InsertTrnascationInvoice.get('Rentalcost').value || 0;
    const securityDeposit = this.InsertTrnascationInvoice.get('Securedeposit').value || 0;
    const totalAmount = Number(rentalCost) + Number(securityDeposit);
    this.InsertTrnascationInvoice.patchValue({ Totalamount: totalAmount });
  }
  

  


  
 

}
