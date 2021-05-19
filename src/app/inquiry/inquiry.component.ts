import { Component, OnInit } from '@angular/core';
import { CusporserviceService } from '../cusporservice.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  salesdoc:any;
  selected:any;
  constructor(private ser:CusporserviceService) { }
  
  ngOnInit(): void {
    this.ser.body1.doctype='A';
    this.ser.body1.cusid=this.ser.body.cusid;
    this.ser.get_cussale().subscribe(data =>{
      this.salesdoc=data;
      console.log(this.salesdoc);
    },err =>{console.log(err)});
  }
  getdetails(){
    console.log(this.selected);
  }

}
