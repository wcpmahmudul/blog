import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService, private accountService: AccountService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
          switch (error.status) {
            case 400:
              handle400Error
              break;
            case 401:
              break;
            case 500:
              break;
            default:
              break;
          }
        }
        return throwError(error);
      })
    );
  }

  handle400Error(error: any) {

  }
  handle401Error(error: any) {

  }
  handle500Error(error: any) {

  }
  handleUnexpectedError(error: any) {

  }
}
