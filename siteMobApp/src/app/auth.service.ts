import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EneServiceService } from './ene-service.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  resObj:any = {};
  userId;
  constructor(private http: HttpClient,
    private storage: NativeStorage,
    private env: EneServiceService,) { }


    login(email: String, password: String) {
      return this.http.post(this.env.api_URL + 'mobile/login',
        {email: email, password: password}
      ).pipe(
        tap(res => {
          this.resObj = res;
          this.storage.setItem('userId', this.resObj.user)
          .then(
            () => {
              console.log('User Stored');
            },
            error => console.error('Error storing item', error)
          );
          
          this.isLoggedIn = this.resObj.IsAuthenticated;
          return this.resObj.Message;
        }),
      );
    }


    logout(){
      this.isLoggedIn = false;
      this.storage.remove('userId');
    }
  

    getUser() {
      return this.storage.getItem('userId').then(
        data => {
          this.userId = data;
          if(this.userId != null) {
            this.isLoggedIn=true;
          } else {
            this.isLoggedIn=false;
          }
        },
        error => {
          this.userId = null;
          this.isLoggedIn=false;
        }
      );
    }
  
}
