import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CusporserviceService } from '../cusporservice.service';
import { EmpporserviceService } from '../empporservice.service';
import { TokenInterService } from '../token-inter.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: "Hydrogen", weight: 1.0079, symbol: 'H'},
  {position: 2, name: "Helium", weight: 4.0026, symbol: 'He'},
  {position: 3, name: "Lithium", weight: 6.941, symbol: 'Li'},
  {position: 4, name: "Beryllium", weight: 9.0122, symbol: 'Be'},
  {position: 5, name: "Boron", weight: 10.811, symbol: 'B'},
  {position: 6, name: "Carbon", weight: 12.0107, symbol: 'C'},
  {position: 7, name: "Nitrogen", weight: 14.0067, symbol: 'N'},
  {position: 8, name: "Oxygen", weight: 15.9994, symbol: 'O'},
  {position: 9, name: "Fluorine", weight: 18.9984, symbol: 'F'},
  {position: 10, name: "Neon", weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-cusdashboard',
  templateUrl: './cusdashboard.component.html',
  styleUrls: ['./cusdashboard.component.css']
})
export class CusdashboardComponent implements OnInit {
  isavailable1:any=false;
  isprogress1:any=false;
  data:any;
  size=['40%','32%','26%'];
  constructor(private ser:EmpporserviceService) { }

  ngOnInit(): void {
    TokenInterService.stype='E';
    this.ser.body.empid='5016';
    this.isprogress1=true;
    this.isavailable1=true;
    this.ser.get_empfset().subscribe(res=>{
      this.data=res;
      if(this.data.TYPE=='E'){
        this.isavailable1=false;
      }
      this.isprogress1=false;
    },er=>{console.log(er);this.isprogress1=false;});
  }
}
