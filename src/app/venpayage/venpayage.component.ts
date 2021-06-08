import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { VenporserviceService } from '../venporservice.service';
import{MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-venpayage',
  templateUrl: './venpayage.component.html',
  styleUrls: ['./venpayage.component.css']
})
export class VenpayageComponent implements OnInit,AfterViewInit{
  isavailable:any=false;
  payage=new MatTableDataSource();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  data:any;
  index:any=-1;
  isprogress2:any=false;
  displayedColumns:any=['COMP_CODE','ITEM_NUM','BLINE_DATE','FISC_YEAR','DOC_NO','DOC_DATE','LC_AMOUNT','CURRENCY','PSTNG_DATE','AGE'];
  constructor(private ser:VenporserviceService) { }
  ngOnInit(): void {
      this.isprogress2=true;
      this.isavailable=true;
      this.ser.get_venpayage().subscribe(res=>{
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
      },err=>{console.log(err);this.isprogress2=false;});
  }
  mouse(ind:any){
    this.index=ind;
  }
  

  ngAfterViewInit() {
    setTimeout(()=>{
      this.payage.sort = this.sort;
      console.log(this.sort);
      console.log(this.payage);
    },5000);
   
  }

}
