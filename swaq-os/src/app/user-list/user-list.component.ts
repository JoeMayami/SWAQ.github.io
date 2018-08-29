import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 2, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 3, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 4, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 5, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 6, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 7, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 8, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 9, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 10, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 11, name: 'John Person', weight:'Driver', symbol: 'Activated'},
  {position: 12, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 13, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 14, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 15, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 16, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 17, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 18, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 19, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
  {position: 20, name: 'John Person', weight: 'Driver', symbol: 'Activated'},
];

