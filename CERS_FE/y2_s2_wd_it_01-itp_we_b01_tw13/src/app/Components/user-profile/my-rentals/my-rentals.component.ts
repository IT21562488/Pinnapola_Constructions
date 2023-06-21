import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MyRentalsService } from 'src/app/Services/my-rentals.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-rentals',
  templateUrl: './my-rentals.component.html',
  styleUrls: ['./my-rentals.component.css']
})
export class MyRentalsComponent implements OnInit {
  displayedColumns: string[] = ['RentalID', 'Equipment', 'Quantity', 'FromDate', 'ToDate','Security Deposit','Amount', 'actions'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  UserID: number = 1;
  data: any;

  constructor(
    private myRentalsService: MyRentalsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMyRentals();
  }

  getMyRentals(){
    this.myRentalsService.getMyRentals(this.UserID, 'A').subscribe((res) => {
      // this.dataSource = res.data;
      this.dataSource = new MatTableDataSource<any>(res.data);
      this.dataSource.paginator = this.paginator;
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

  navigateToExtendPage(categoryID, row){
    this.data = row;
    if(categoryID === 1){
      this.router.navigate(['/MyRentals/ExtendMachinery', this.data]);
      console.log('this.data', this.data)
    }
    else{
      this.router.navigate(['/MyRentals/ExtendVehicle', this.data]);
      console.log('this.data', this.data)
    }
  }

}
