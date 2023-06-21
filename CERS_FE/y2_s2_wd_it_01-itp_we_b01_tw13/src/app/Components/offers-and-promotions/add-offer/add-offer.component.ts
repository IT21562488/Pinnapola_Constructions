import { Component, OnInit, Input,Inject,ElementRef ,ViewChild} from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators,ValidatorFn} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfferService } from 'src/app/Services/offer.service';
import { OfferModel } from 'src/app/Models/OfferModel';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
;

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  dataInsert: OfferModel = new OfferModel();
  OfferForm !: FormGroup;
  actionBtn: string = "Add"
  ModalTitle:string = "Add Offers"
  productImage:any;
  file!: File; // Variable to store file
  Result: any;
  progressvalue = 0;
  selectedFile: File=null;

  constructor(
    private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) 
    public  editData: any, 
    private offerService: OfferService, 
    private dialogRef : MatDialogRef<AddOfferComponent>,
    private http: HttpClient 
  ) { }

  ngOnInit(): void {
    this.OfferForm = this.formBuilder.group({
      offerType : ['',Validators.required],
      offerName : ['',Validators.required],
      offerDescription : ['',Validators.required],
      offerPeriod : ['',Validators.required],
      offerConditions : ['',Validators.required],
      offerDiscount : ['',Validators.required],
      offerMachineID : ['',Validators.required],
      // offerVehicleID: ['',Validators.required],
      // PhotoFileName: ['',Validators.required],
      // Content:['',Validators.required],

     
      
    })

    console.log(this.editData)
    if(this.editData){
      this.ModalTitle= "Edit Offer"
      this.actionBtn = "Update"
      this.OfferForm.controls['offerType'].setValue(this.editData.offerType);
      this.OfferForm.controls['offerName'].setValue(this.editData.offerName);
      this.OfferForm.controls['offerDescription'].setValue(this.editData.offerDescription);
      this.OfferForm.controls['offerPeriod'].setValue(this.editData.offerPeriod);
      this.OfferForm.controls['offerConditions'].setValue(this.editData.offerConditions);
      this.OfferForm.controls['offerDiscount'].setValue(this.editData.offerDiscount);
      this.OfferForm.controls['offerMachineID'].setValue(this.editData.offerMachineID);
      this.OfferForm.controls['offerVehicleID'].setValue(this.editData.offerVehicleID);
      // this.OfferForm.controls['PhotoFileName'].setValue(this.editData.PhotoFileName)
      // this.OfferForm.controls['Content'].setValue(this.editData.Content)
    }
  }

  setDataInsert(){
    this.dataInsert.OfferID = this.OfferForm.value.offerID;
    this.dataInsert.OfferType = this.OfferForm.value.offerType;
    this.dataInsert.OfferName= this.OfferForm.value.offerName;
    this.dataInsert.OfferDescription = this.OfferForm.value.offerDescription;
    this.dataInsert.OfferPeriod = this.OfferForm.value.offerPeriod;
    this.dataInsert.OfferConditions = this.OfferForm.value.offerConditions;
    this.dataInsert.OfferDiscount = this.OfferForm.value.offerDiscount;
    this.dataInsert.OfferMachineID = this.OfferForm.value.offerMachineID;
    this.dataInsert.OfferVehicleID = this.OfferForm.value.offerVehicleID;
    this.dataInsert.PhotoFileName = this.OfferForm.value.PhotoFileName; 
    // this.dataInsert.Content = this.selectedFile; 

    if(!this.editData){
      this.dataInsert.OfferID = '';
    }else{
       this.dataInsert.OfferID = this.editData.offerID;
    }

    

  }

  onChange(event:any){
    
    this.selectedFile = <File>event.target.files[0];
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=()=>{
    this.productImage=reader.result;
    };
  }

  addOffer(){
    this.setDataInsert();
    console.log("insert",this.dataInsert);
    if(!this.editData){
      if(this.OfferForm.valid){
        this.offerService.postOffer(this.dataInsert)
        .subscribe({
          next:(res)=>{
            alert("Offer added Successfully")
            this.OfferForm.reset();
            this.dialogRef.close('Add')
            window.location.reload();
          
          },
          error:()=>{
            alert("Error while Offer adding")
          }
        })        
        console.log('this.dataInsert', this.dataInsert)
      }
    }else{
      this.updateOffer()
    }
  }
  

  updateOffer(){
    this.setDataInsert();
    console.log(this.dataInsert);    
    this.offerService.updateOffer(this.dataInsert)
    .subscribe({
      next:(res)=>{
        alert("Offer updated Successfully")
        this.OfferForm.reset();
        this.dialogRef.close('update')
        window.location.reload();
      },
      error:()=>{
        alert("Error while Offer update")
      }
    })
  }

}
