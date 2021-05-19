import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cussignup',
  templateUrl: './cussignup.component.html',
  styleUrls: ['./cussignup.component.css']
})
export class CussignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(regform:NgForm){
    console.log(regform);
  }
  validity(regform:NgForm):any{
    if(regform.value.password === regform.value.confirm && regform.value.password.length >=8 && regform.value.password.length<=12){
      return true
    }
    return false
  }

}
