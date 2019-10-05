import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm :FormGroup;
  constructor(private fb:FormBuilder) {
   
    
   }

  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email :['',Validators.required],
      password: ['',Validators.required]
    })
  }

  logForm(){
    console.log(this.loginForm.value);
  }

}
