import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MachineryCatService } from 'src/app/Services/machinery-cat.service';
import { VehicleListService } from 'src/app/Services/vehicle-list.service';

@Component({
  selector: 'app-vehicle-category',
  templateUrl: './vehicle-category.component.html',
  styleUrls: ['./vehicle-category.component.css']
})
export class VehicleCategoryComponent implements OnInit {

  CategoryList: any;
  vList: any;

  displayedColumns: string[] = ['description'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:MachineryCatService, private vehicleService: VehicleListService){
  this.GetAllCategory();
  }
  GetAllCategory() {
    this.service.GetCategory().subscribe((result) => {
      this.CategoryList=result.data;
      console.log('çatlist', this.CategoryList)
    });
  }

  GetItems(catId){
    this.vehicleService.GetItem(catId).subscribe((result) => {
      this.vList=result.data;
      console.log('vlist', this.vList)
    });
  }
    ngOnInit(): void {
      this.GetAllCategory
    }
  }
