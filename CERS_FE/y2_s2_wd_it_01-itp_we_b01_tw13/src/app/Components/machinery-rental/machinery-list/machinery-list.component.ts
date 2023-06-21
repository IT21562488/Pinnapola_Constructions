import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MachineryCatService } from 'src/app/Services/machinery-cat.service';
import { MachineryItemService } from 'src/app/Services/machinery-item.service';

@Component({
  selector: 'app-machinery-list',
  templateUrl: './machinery-list.component.html',
  styleUrls: ['./machinery-list.component.css']
})
export class MachineryListComponent implements OnInit {

  ItemList: any;

displayedColumns: string[] = ['name','description','category','price'];
dataSource!: MatTableDataSource<any>

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
constructor(private service:MachineryItemService){
this.GetAllItem();
}
GetAllItem() {
  this.service.GetItem().subscribe((result) => {
    this.ItemList=result.data;
    console.log('çatlist', this.ItemList)
  });
}
  ngOnInit(): void {
    this.GetAllItem
  }
}