import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { InventoryService } from 'src/app/Services/inventory.service';
import { MatDialog } from '@angular/material/dialog';
import { AddMachinesComponent } from '../add-machines/add-machines.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
import { jsPDF } from 'jspdf'

@Component({
  selector: 'app-show-inventory',
  templateUrl: './show-inventory.component.html',
  styleUrls: ['./show-inventory.component.css']
})
export class ShowInventoryComponent implements OnInit {

  vehiList:any;
 @ViewChild('content',{static:false}) el!: ElementRef;

  displayedColumns: string[] = ['machineID', 'category', 'machineName', 'description', 'machinePrice','count','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog, 
    private inventoryService: InventoryService
  ) {  this.Getmachine();}
  
  Getmachine() {
    this.inventoryService.getMachine().subscribe(result=>{
      this.vehiList=result.data;
      console.log('vehiList', this.vehiList);
      });
  }

  ngOnInit(): void {
    this.getAllMachine();
  }

  openDialog() {
    this.dialog.open(AddMachinesComponent, {
      width:'90%',
      height:'90%',
    });
  }

  getAllMachine(){
    this.inventoryService.getMachine().subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res.data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
      console.log("data" , res.data)
    },
    error => {
      console.log(error)
   })
  }

  editMachine(row: any){
    this.dialog.open(AddMachinesComponent,{
      width:'90%',
      height:'90%',
      data:row
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteMachine(id: any){
    console.log(id);
  
    this.inventoryService.deleteMachine(id)
    .subscribe({
      next:(res)=>{
        alert("Machine deleted Successfully")
        window.location.reload();
      },
      error:()=>{
        alert("Error while Machine delete")
      }
    })
  }
 
  
  MachineList:any=[];

  ModalTitle:string;
  ActivateAddMachineComp:boolean=false;
  Machine:any;

  // ngOnInit(): void {
  //   this.refreshOfferList();
  // }

  addClick(){
    this.dialog.open(AddMachinesComponent, {
      width: '70%'
    });
      this.ModalTitle="Add Machine";
      this.ActivateAddMachineComp=true;
  }

//   editClick(item){
//     this.Offer=item;
//     this.ModalTitle="Edit Offer";
//     this.ActivateAddOfferComp=true;
//   }

//   deleteClick(item){
//     if(confirm('Are you sure??')){
//       this.service.deleteOffer(item.OfferID).subscribe(data=>{
//         alert(data.toString());
//         this.refreshOfferList();
//       })
//     }
//   }

  closeClick(){
    this.ActivateAddMachineComp=false;
    this.refreshMachineList();
  }

  refreshMachineList(){
    this.inventoryService.getMachine().subscribe(data=>{
      this.MachineList=data;
    });
  }

  makePDF(){
    let pdf = new jsPDF('p','pt','a4');
    
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
       
        pdf.save("Machine details.pdf");
      }
    });
   
  }

}
