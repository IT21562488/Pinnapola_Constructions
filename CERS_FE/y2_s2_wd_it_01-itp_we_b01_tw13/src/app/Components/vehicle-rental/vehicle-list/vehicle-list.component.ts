import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MachineryItemService } from 'src/app/Services/machinery-item.service';
import { VehicleListService } from 'src/app/Services/vehicle-list.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  ItemList: any;

  displayedColumns: string[] = ['name','description','category','price'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:VehicleListService){
  this.GetAllItem();
  }
  GetAllItem() {
    // this.service.GetItem().subscribe((result) => {
    //   this.ItemList=result.data;
    //   console.log('çatlist', this.ItemList)
    // });
  }
    ngOnInit(): void {
      this.GetAllItem
    }
  }