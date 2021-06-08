import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CusporserviceService } from '../cusporservice.service';

@Component({
  selector: 'app-cuspayage',
  templateUrl: './cuspayage.component.html',
  styleUrls: ['./cuspayage.component.css']
})
export class CuspayageComponent implements OnInit,AfterViewInit {
  isavailable:any=false;
  payage:any=[];
  data:any;
  isprogress2:any=false;
  index:any=-1;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  displayedColumns:any=['COMP_CODE','ITEM_NUM','ALLOC_NMBR','FISC_YEAR','DOC_NO','DOC_DATE','LC_AMOUNT','CURRENCY','PSTNG_DATE','AGE'];
  constructor(private ser:CusporserviceService) { }

  ngOnInit(): void {
      this.isprogress2=true;
      this.isavailable=true;
      this.ser.get_cuspayage().subscribe(res=>{
        this.data=res;
        console.log(this.data);
        if(this.data.PAYAGE.length===0)
        {
          this.isavailable=false;
        }
        else{
          this.payage=new MatTableDataSource(this.data.PAYAGE);
          this.isavailable=true;
        }
        this.isprogress2=false;
      },err=>{console.log(err);
        this.isprogress2=false;
        this.isavailable=false;
      });
  }
  mouse(ind:any){
    this.index=ind;
  }
  mouseout(){
    this.index=-1;
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.payage.sort = this.sort;
      console.log(this.sort);
      console.log(this.payage);
    },5000);
   
  }
}
