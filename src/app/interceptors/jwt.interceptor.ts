import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getUserStateFromLocalStorage } from '../shared/services/helpers/local-storage-helper';
import { LoginInfoModel } from '../shared/models/loginInfo.model';




@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  user: LoginInfoModel;
  constructor() {
    this.user = new LoginInfoModel();
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.user = getUserStateFromLocalStorage();
    if (this.user.username) {
      const duplicate = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.user.accessToken.token}`
        }
      })
      return next.handle(duplicate);
    }

    return next.handle(req);

  }

}
