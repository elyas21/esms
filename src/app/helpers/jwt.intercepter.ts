import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../core/serivice/auth.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.currentUserValue;
    let googleInfo = this.authenticationService.currentGoogleUserValue;

    if (currentUser && currentUser.token && googleInfo && googleInfo.gtoken) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${currentUser.token} google ${googleInfo.gtoken}`
        }
      });
    }
    else if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${currentUser.token}`
        } 
      });
    }
    else{
      console.log("No token found");
      
    }
    console.log(request);
    request = request.clone({ withCredentials: true });

    console.log('tzbt');
    withCredentials: true
    return next.handle(request);
  }
}
