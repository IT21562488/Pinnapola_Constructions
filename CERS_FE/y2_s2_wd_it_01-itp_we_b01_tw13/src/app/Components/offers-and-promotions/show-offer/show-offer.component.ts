import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { OfferService } from 'src/app/Services/offer.service';
import { MatDialog } from '@angular/material/dialog';
import { AddOfferComponent } from '../add-offer/add-offer.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
import { jsPDF } from 'jspdf'
import { viewport } from '@popperjs/core';

@Component({
  selector: 'app-show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.css']
})
export class ShowOfferComponent implements OnInit {

 OfferList:any;
 @ViewChild('content',{static:false}) el!: ElementRef;

  displayedColumns: string[] = ['offerID', 'offerType', 'offerName', 'offerDescription', 'offerPeriod','offerConditions','offerDiscount','offerMachineID','offerVehicleID','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog, 
    private offerService: OfferService
  ) { 
    this.GetOffers();
  }
  GetOffers() {
    this.offerService.getOffer().subscribe(result=>{
      this.OfferList=result.data;
      console.log('OfferList', this.OfferList);
      });
  }

  ngOnInit(): void {
    this.getAllOffer();

  }

  
  openDialog() {
    this.dialog.open(AddOfferComponent, {
      width:'90%',
      height:'90%',
    });
  }

  getAllOffer(){
    this.offerService.getOffer().subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res.data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort = this.sort;
      console.log("data" , res.data)
    },
    error => {
      console.log(error)
    })
  }

  editOffer(row: any){
    this.dialog.open(AddOfferComponent,{
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

  deleteOffer(id: any){
    console.log(id);
  
    this.offerService.deleteOffer(id)
    .subscribe({
      next:(res)=>{
        alert("Offer deleted Successfully")
        window.location.reload();
      },
      error:()=>{
        alert("Error while Offer delete")
      }
    })
  }
 
  
  // OfferList:any=[];

  // ModalTitle:string;
  // ActivateAddOfferComp:boolean=false;
  // Offer:any;

  

  // addClick(){
  //   this.dialog.open(AddOfferComponent, {
  //     width: '70%'
  //   });
  //     this.ModalTitle="Add Offer";
  //     this.ActivateAddOfferComp=true;
  // }



  // closeClick(){
  //   this.ActivateAddOfferComp=false;
  //   this.refreshOfferList();
  // }

  // refreshOfferList(){
  //   this.offerService.getOffer().subscribe(data=>{
  //     this.OfferList=data;
  //   });
  // }

  makePDF(){
    let pdf = new jsPDF('p','pt','a2');
    
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
       
        pdf.save("Offer details.pdf");
      }
    });
   
  }
 

}
