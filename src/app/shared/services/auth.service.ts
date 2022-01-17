import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';
import { LoginInfoModel } from '../models/loginInfo.model';
import { setLoginStateToLocalStorage, setUserStateToLocalStorage,getUserStateFromLocalStorage } from './helpers/local-storage-helper';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl :string =  environment.baseUrl;
  private servicePath = "/Auth";
  private loginInfo : LoginInfoModel;
  
  constructor(private http: HttpClient) {
    this.loginInfo = new LoginInfoModel();
  }

  login(model: LoginModel)  {
    return this.http.post(`${this.baseUrl}${this.servicePath}/Login`, model).pipe(
      map((response : any)  => {
        if(response.username){
          this.loginInfo = response;
          setUserStateToLocalStorage(this.loginInfo);          
        }
        return response;
      })
    )
  }
  logOut(){
    localStorage.removeItem('user');
    setLoginStateToLocalStorage(false);
  }

  isLoggedIn(){
    return this.http.get(`${this.baseUrl}${this.servicePath}/is-logged-in`);
  }
  
}
