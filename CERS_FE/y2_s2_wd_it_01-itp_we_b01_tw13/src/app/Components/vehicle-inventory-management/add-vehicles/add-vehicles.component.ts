import { Component, OnInit, Input,Inject } from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryService } from 'src/app/Services/inventory.service';
import { VehicleModel } from 'src/app/Models/VehicleModel';


@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.css']
})
export class AddVehiclesComponent implements OnInit {

  dataInsert: VehicleModel = new VehicleModel();
  VehicleForm !: FormGroup;
  actionBtn: string = "Add"
  ModalTitle:string = "Add Vehicles"
  productImage:any;
  file!: File;
  selectedFile: File=null;

  constructor(
    private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) 
    public editData: any, 
    private vehicleService: InventoryService, 
    private dialogRef : MatDialogRef<AddVehiclesComponent> 
  ) { }

  ngOnInit(): void {
    this.VehicleForm = this.formBuilder.group({
      category : ['',Validators.required],
      vehicleName : ['',Validators.required],
      description : ['',Validators.required],
      vehiclePrice : ['',Validators.required],
      count : ['',Validators.required],
      PhotoFileName: ['',Validators.required],
     
    })

    console.log(this.editData)
    if(this.editData){
      this.ModalTitle="edit vehicles"
      this.actionBtn = "Update"
      this.VehicleForm.controls['category'].setValue(this.editData.category);
      this.VehicleForm.controls['vehicleName'].setValue(this.editData.vehicleName);
      this.VehicleForm.controls['description'].setValue(this.editData.description);
      this.VehicleForm.controls['vehiclePrice'].setValue(this.editData.vehiclePrice);
      this.VehicleForm.controls['count'].setValue(this.editData.count);
 
    }
  }

  setDataInsert(){
    this.dataInsert.VehicleID = this.VehicleForm.value.vehicleID;
    this.dataInsert.Category = this.VehicleForm.value.category;
    this.dataInsert.VehicleName= this.VehicleForm.value.vehicleName;
    this.dataInsert.Description = this.VehicleForm.value.description;
    this.dataInsert.VehiclePrice = this.VehicleForm.value.vehiclePrice;
    this.dataInsert.Count = this.VehicleForm.value.count;
    this.dataInsert.PhotoFileName = this.VehicleForm.value.PhotoFileName;

    if(!this.editData){
      this.dataInsert.VehicleID = '';
    }else{
       this.dataInsert.VehicleID = this.editData.vehicleID;
    }
  }


  addVehicle(){
    this.setDataInsert();
    console.log("insert",this.dataInsert);
    if(!this.editData){
      if(this.VehicleForm.valid){
        this.vehicleService.postVehicle(this.dataInsert)
        .subscribe({
          next:(res)=>{
            alert("Vehicle added Successfully")
            this.VehicleForm.reset();
            this.dialogRef.close('save')
            window.location.reload();
          
          },
          error:()=>{
            alert("Error while Vehicle adding")
          }
        })        
        console.log('this.dataInsert', this.dataInsert)
      }
    }else{
      this.updateVehicle()
    }
  }
  
  updateVehicle(){
    this.setDataInsert();
    console.log(this.dataInsert);    
    this.vehicleService.updateVehicle(this.dataInsert)
    .subscribe({
      next:(res)=>{
        alert("Vehicle updated Successfully")
        this.VehicleForm.reset();
        this.dialogRef.close('update')
        window.location.reload();
      },
      error:()=>{
        alert("Error while Vehicle update")
      }
    })
  }

  onChange(event:any){
    
    this.selectedFile = <File>event.target.files[0];
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=()=>{
    this.productImage=reader.result;
    };
  }

}

