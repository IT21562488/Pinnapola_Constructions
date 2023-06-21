import { Component, OnInit, ViewChild } from '@angular/core';
import { MachineryCatService } from 'src/app/Services/machinery-cat.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipment-category',
  templateUrl: './equipment-category.component.html',
  styleUrls: ['./equipment-category.component.css']
})
export class EquipmentCategoryComponent implements OnInit {

CategoryList: any;

displayedColumns: string[] = ['description'];
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
constructor(private service:MachineryCatService){
this.GetAllCategory();
}
GetAllCategory() {
  this.service.GetCategory().subscribe((result) => {
    this.CategoryList=result.data;
    console.log('çatlist', this.CategoryList)
  });
}
  ngOnInit(): void {
    this.GetAllCategory
  }
}



