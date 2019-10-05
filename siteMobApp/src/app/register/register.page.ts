import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      employeeNumber:['',Validators.required],
      jobPosition:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      rpassword:['',Validators.required],


    })
  }

}
