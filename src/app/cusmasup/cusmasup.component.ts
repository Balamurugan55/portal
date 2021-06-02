import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CusporserviceService } from '../cusporservice.service';
@Component({
  selector: 'app-cusmasup',
  templateUrl: './cusmasup.component.html',
  styleUrls: ['./cusmasup.component.css']
})
export class CusmasupComponent implements OnInit {
  // url='http://localhost:3000/cusporauth/cusmasup';
  // uploader:FileUploader = new FileUploader({url:this.url});
  file:any;
  fd:any;
  isupload:any=false;
  value:any='0%';
  event:any;
  isdisplay:any=false;
  cusids:any=[];
  constructor(private ser:CusporserviceService) { 
    // this.uploader.onCompleteItem = (item:any, res:any , status:any, headers:any) => {
    //   console.log(res);}
  }

  ngOnInit(): void {

  }
  get_file(event:any){
      this.file=event.target.files[0];
  }
  upload(form:any){
      this.fd=new FormData();
      this.fd.append('file',this.file,this.file.name);
      this.ser.uploadfile(this.fd).subscribe(res=>{
          this.event=res;
          if(this.event.type === HttpEventType.UploadProgress)
          {
            this.isupload=true;
            this.value=Math.round(this.event.loaded/this.event.total)*100 + '%';

          }
          else if(this.event.type === HttpEventType.Response){
            console.log(res);
            this.cusids=this.event.body;
            this.isupload=false;
            if(this.cusids.length!=0)
            {
            this.isdisplay=true;
            }
          }
      });
      this.isupload=false;
      this.value='0%';
      form.reset();
  }
  clear(form:any){
    this.isupload=false;
    this.isdisplay=false;
    this.value='0%';
    form.reset();
  }
  
}
