import { Component, OnInit, Input,Inject } from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryService } from 'src/app/Services/inventory.service';
import { MachineModel } from 'src/app/Models/MachineModel';

@Component({
  selector: 'app-add-machines',
  templateUrl: './add-machines.component.html',
  styleUrls: ['./add-machines.component.css']
})
export class AddMachinesComponent implements OnInit {

  dataInsert: MachineModel = new MachineModel();
  MachineForm !: FormGroup;
  actionBtn: string = "Add"
  ModalTitle:string = "Add Machines"
  productImage:any;
  file!: File;
  selectedFile: File=null;

  constructor(
    private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) 
    public editData: any, 
    private inventoryService: InventoryService, 
    private dialogRef : MatDialogRef<AddMachinesComponent> 
  ) { }

  ngOnInit(): void {
    this.MachineForm = this.formBuilder.group({
      category : ['',Validators.required],
      machineName : ['',Validators.required],
      description : ['',Validators.required],
      machinePrice : ['',Validators.required],
      count : ['',Validators.required],
      PhotoFileName: ['',Validators.required],
     
    })

    console.log(this.editData)
    if(this.editData){
      this.ModalTitle="edit machines"
      this.actionBtn = "Update"
      this.MachineForm.controls['category'].setValue(this.editData.category);
      this.MachineForm.controls['machineName'].setValue(this.editData.machineName);
      this.MachineForm.controls['description'].setValue(this.editData.description);
      this.MachineForm.controls['machinePrice'].setValue(this.editData.machinePrice);
      this.MachineForm.controls['count'].setValue(this.editData.count);
 
    }
  }

  setDataInsert(){
    this.dataInsert.MachineID = this.MachineForm.value.machineID;
    this.dataInsert.Category = this.MachineForm.value.category;
    this.dataInsert.MachineName= this.MachineForm.value.machineName;
    this.dataInsert.Description = this.MachineForm.value.description;
    this.dataInsert.MachinePrice = this.MachineForm.value.machinePrice;
    this.dataInsert.Count = this.MachineForm.value.count;
    this.dataInsert.PhotoFileName = this.MachineForm.value.PhotoFileName;

    if(!this.editData){
      this.dataInsert.MachineID = '';
    }else{
       this.dataInsert.MachineID = this.editData.machineID;
    }
  }


  addMachine(){
    this.setDataInsert();
    console.log("insert",this.dataInsert);
    if(!this.editData){
      if(this.MachineForm.valid){
        this.inventoryService.postMachine(this.dataInsert)
        .subscribe({
          next:(res)=>{
            alert("Machine added Successfully")
            this.MachineForm.reset();
            this.dialogRef.close('save')
            window.location.reload();
          
          },
          error:()=>{
            alert("Error while Machine adding")
          }
        })        
        console.log('this.dataInsert', this.dataInsert)
      }
    }else{
      this.updateMachine()
    }
  }
  
  updateMachine(){
    this.setDataInsert();
    console.log(this.dataInsert);    
    this.inventoryService.updateMachine(this.dataInsert)
    .subscribe({
      next:(res)=>{
        alert("Machine updated Successfully")
        this.MachineForm.reset();
        this.dialogRef.close('update')
        window.location.reload();
      },
      error:()=>{
        alert("Error while Machine update")
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
