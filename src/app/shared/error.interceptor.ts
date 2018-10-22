import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import { SharedService } from './shared.service';
import { AppState } from '../reducers';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private sharedService: SharedService, private store: Store<AppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req)
      .pipe(
       tap((response) => {
          if (response instanceof HttpResponse) {
            if (response.body.code === 'UNAUTHORIZED') {
              // this.sharedService.createNotification('error', `${req.urlWithParams}`, 'Unauthorized');
              // this.store.select(getHostname)
              //   .subscribe(url => {
              //     setTimeout(() =>  location.assign( `${url}/ROS/unauthorized`), 3000);
              //   });
            }
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
         //   this.sharedService.createNotification('error', `Xəta baş verdi`, 'Error');
          }
        })
      );
  }

}
