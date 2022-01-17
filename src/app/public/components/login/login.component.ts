import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/shared/models/login.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { getLoginStateFromLocalStorage, setLoginStateToLocalStorage } from 'src/app/shared/services/helpers/local-storage-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo: LoginModel;
  loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.loginInfo = new LoginModel();
    this.setLoggedIn();
    this.loggedIn = this.getLoggedIn();
  }

  ngOnInit(): void {
  }

  setLoggedIn() {
    this.authService.isLoggedIn().subscribe(response => {
      this.loggedIn = true;
      setLoginStateToLocalStorage(true);
    }, error => {
      this.loggedIn = false;
      setLoginStateToLocalStorage(false);
    });
  }

  getLoggedIn() {
    return getLoginStateFromLocalStorage();
  }
  login() {
    this.authService.login(this.loginInfo).subscribe((response: any) => {
      if (response.username) {
        this.loggedIn = true;
        this.router.navigateByUrl("/")
      }
      else {
        this.router.navigateByUrl("/login")
      }

    });

  }


}
