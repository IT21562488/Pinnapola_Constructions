import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { InventoryService } from 'src/app/Services/inventory.service';
import { MatDialog } from '@angular/material/dialog';
import { AddVehiclesComponent } from '../add-vehicles/add-vehicles.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
import { jsPDF } from 'jspdf'

@Component({
  selector: 'app-show-vehice',
  templateUrl: './show-vehice.component.html',
  styleUrls: ['./show-vehice.component.css']
})
export class ShowVehicleComponent implements OnInit {

  vehiList:any;
 @ViewChild('content',{static:false}) el!: ElementRef;

  displayedColumns: string[] = ['vehicleID', 'category', 'vehicleName', 'description', 'vehiclePrice','count','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog, 
    private vehicleService: InventoryService
  ) { this.Getvehi();}

  Getvehi() {
    this.vehicleService.getVehicle().subscribe(result=>{
      this.vehiList=result.data;
      console.log('vehiList', this.vehiList);
      });
  }

  ngOnInit(): void {
    this.getAllVehicle();
  }

  openDialog() {
    this.dialog.open(AddVehiclesComponent, {
      width:'90%',
      height:'90%',
    });
  }

  getAllVehicle(){
    this.vehicleService.getVehicle().subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res.data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
      console.log("data" , res.data)
    },)
    error => {
      console.log(error)
  }
  }

  editVehicle(row: any){
    this.dialog.open(AddVehiclesComponent,{
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

  deleteVehicle(id: any){
    console.log(id);
  
    this.vehicleService.deleteVehicle(id)
    .subscribe({
      next:(res)=>{
        alert("Vehicle deleted Successfully")
        window.location.reload();
      },
      error:()=>{
        alert("Error while Vehicle delete")
      }
    })
  }
 
  
  VehicleList:any=[];

  ModalTitle:string;
  ActivateAddVehicleComp:boolean=false;
  Vehicle:any;

  // ngOnInit(): void {
  //   this.refreshVehicleList();
  // }

  addClick(){
    this.dialog.open(AddVehiclesComponent, {
      width: '70%'
    });
      this.ModalTitle="Add Vehicle";
      this.ActivateAddVehicleComp=true;
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
    this.ActivateAddVehicleComp=false;
    this.refreshVehicleList();
  }

  refreshVehicleList(){
    this.vehicleService.getMachine().subscribe(data=>{
      this.VehicleList=data;
    });
  }

  makePDF(){
    let pdf = new jsPDF('p','pt','a4');
    
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
       
        pdf.save("Vehicle details.pdf");
      }
    });
   
  }
  

}