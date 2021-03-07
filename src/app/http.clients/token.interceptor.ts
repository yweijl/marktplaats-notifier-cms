import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (this.auth.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.token}`
        }
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError(
        (
          httpErrorResponse: HttpErrorResponse,
          _: Observable<HttpEvent<any>>
        ) => {
          if (httpErrorResponse.status === 401) {
            this.auth.redirectToLogin();
          }
          return throwError(httpErrorResponse);
        }
      )
    );
  }
}