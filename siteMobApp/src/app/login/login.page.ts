import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertServiceService } from '../alert-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm :FormGroup;
  constructor(private fb:FormBuilder, private authService:AuthService, private alertService:AlertServiceService,   private navCtrl: NavController) {
   
    
   }

  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email :['',Validators.required],
      password: ['',Validators.required]
    })
  }

  logForm(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      data => {
        console.log(data);
        this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        // this.dismissLogin();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );

  }


  // dismissLogin() {
  //   this.modalController.dismiss();
  // }

}
