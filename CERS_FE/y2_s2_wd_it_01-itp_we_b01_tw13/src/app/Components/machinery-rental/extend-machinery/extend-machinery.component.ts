import { ActivatedRoute } from '@angular/router';import { Component, OnInit, Inject } from '@angular/core';
import { MachineryPageService } from 'src/app/Services/machinery-page.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MachineryRentalModel } from 'src/app/Models/MachineryRentalModel';
@Component({
  selector: 'app-extend-machinery',
  templateUrl: './extend-machinery.component.html',
  styleUrls: ['./extend-machinery.component.css']
})
export class ExtendMachineryComponent implements OnInit {
  extendData: any;
  extendMachineryRentalForm !: FormGroup;
  dataToUpdate: MachineryRentalModel = new MachineryRentalModel();
  selectedDate: any;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder, 
    private machineryPageService: MachineryPageService) { 
      this.route.params.subscribe(params => {
        this.extendData = params;
      });
    }

    ngOnInit(): void {
      console.log('extendData', this.extendData)
  
      this.extendMachineryRentalForm = this.formBuilder.group({
        toDate : [this.extendData.toDate, Validators.required],
        fromDate : [this.extendData.fromDate,Validators.required]
      })
      
    }
  
    setDataToUpdate(){
      this.dataToUpdate.RentalID = this.extendData.rentalID;
      this.dataToUpdate.FromDate = this.extendData.fromDate;
      this.dataToUpdate.ToDate = this.extendMachineryRentalForm.value.toDate;
      this.dataToUpdate.RentalAmount = this.extendData.rentalAmount;
    }
  
    requestExtension(){
      this.setDataToUpdate();
      this.machineryPageService.requestExtension(this.dataToUpdate)
      .subscribe({
        next:(res)=>{
          alert("Extension requested Successfully")
          this.extendMachineryRentalForm.reset();
          window.location.reload();
        },
        error:()=>{
          alert("Error while requesting")
        }
      })
    }

}