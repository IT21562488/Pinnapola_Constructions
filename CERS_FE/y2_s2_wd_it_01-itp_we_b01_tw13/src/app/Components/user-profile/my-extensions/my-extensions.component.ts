import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MyRentalsService } from 'src/app/Services/my-rentals.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-extensions',
  templateUrl: './my-extensions.component.html',
  styleUrls: ['./my-extensions.component.css']
})
export class MyExtensionsComponent implements OnInit {
  displayedColumns: string[] = ['RentalID', 'Equipment', 'Quantity', 'Amount', 'New Date', 'actions'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  UserID: number = 1;
  data: any;

  constructor(
    private myRentalsService: MyRentalsService,
    private router: Router) { }

    ngOnInit(): void {
      this.getMyExtensions();
    }
  
    getMyExtensions(){
      this.myRentalsService.getMyRentals(this.UserID, 'E').subscribe((res) => {
        // this.dataSource = res.data;
        this.dataSource = new MatTableDataSource<any>(res.data);
        console.log("data" , res.data)
      },
      error => {
        console.log(error)
      })
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    deleteExtension(RentalID: any){
      console.log(RentalID);
    
      this.myRentalsService.deleteExtension(RentalID)
      .subscribe({
        next:(res)=>{
          alert("Extension deleted Successfully")
          window.location.reload();
        },
        error:()=>{
          alert("Error while Extension delete")
        }
      })
    }

}
