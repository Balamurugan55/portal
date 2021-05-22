import { Component, OnInit } from '@angular/core';
import { CusporserviceService } from '../cusporservice.service';

@Component({
  selector: 'app-cussaleorder',
  templateUrl: './cussaleorder.component.html',
  styleUrls: ['./cussaleorder.component.css']
})
export class CussaleorderComponent implements OnInit {
  isavailable:any=false;
  salesorders:any=[];
  data:any;
  displayedColumns:any=['SD_DOC','ITM_NUMBER','MATERIAL','SHORT_TEXT','NAME','DOC_DATE','NET_VAL','CURRENCY','SALES_ORG','EXCHG_RATE'];
  constructor(private ser:CusporserviceService) { }

  ngOnInit(): void {
      this.ser.get_cussaleor().subscribe(res=>{
        this.data=res;
        if(this.data.SALESORDERS.length===0) {
          this.isavailable=false;
        }
        else{
          this.salesorders=this.data.SALESORDERS;
          this.isavailable=true;
        }
      });
      
  }


}
