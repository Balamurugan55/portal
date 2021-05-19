import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CusporserviceService } from '../cusporservice.service';

@Component({
  selector: 'app-cusdashboard',
  templateUrl: './cusdashboard.component.html',
  styleUrls: ['./cusdashboard.component.css']
})
export class CusdashboardComponent implements OnInit {
  events:any;
  constructor(private serv:CusporserviceService,private router:Router) { }

  ngOnInit(): void {
      this.serv.getspecial().subscribe(
        (res)=>{ this.events = res},
        err=>{ 
          if(err instanceof HttpErrorResponse)
          {
            if(err.status === 401)
            {
              this.router.navigate(['home/customer/']);
            }
          }
        }
      );
  }

}
