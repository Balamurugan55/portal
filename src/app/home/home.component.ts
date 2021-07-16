import { Component, OnInit } from '@angular/core';
import { EmpporserviceService } from '../empporservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(EmpporserviceService.istouched){
      location.reload();
      EmpporserviceService.istouched=false;
    }
  }

}
