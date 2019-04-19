import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {tap, catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import { SharedService } from '../shared.service';
import { AppState } from '../../reducers';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { of, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private sharedService: SharedService, private store: Store<AppState>, public iziToast: Ng2IzitoastService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req)
      .pipe(
       catchError(er => this.handleHttpError(er)),
       map((response) => {
          if (response instanceof HttpResponse) {
            if (response.body && response.body.err && response.body.err.length > 0) {
              const errors = response.body.err;
             this.handleHttpError(errors[0].val).subscribe(res => console.log(res));
             throwError(errors);
             return;
            }
            if (response.body && response.body.code === 'UNAUTHORIZED') {
              // this.sharedService.createNotification('error', `${req.urlWithParams}`, 'Unauthorized');
              // this.store.select(getHostname)
              //   .subscribe(url => {
              //     setTimeout(() =>  location.assign( `${url}/ROS/unauthorized`), 3000);
              //   });
            }
          }
          return response;
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            this.handleHttpError(err.message);

         //   this.sharedService.createNotification('error', `Xəta baş verdi`, 'Error');
          }
        })
      );
  }
  handleHttpError(msg = 'Something went wrong !'): Observable<any> {
    return of(this.sharedService.createNotification('error', msg));
  }

}
