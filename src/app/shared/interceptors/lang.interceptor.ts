import { getAppLanguage } from './../store/ui.selectors';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { take, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class LangInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getAppLanguage)
    .pipe(
      switchMap((lang: string) => {
        if (req.method.toLowerCase() === 'post') {
          const langObj = {
            lang: lang
          };
          const newReq =  req.clone({
            body: {...req.body, ...langObj}
          });
          return next.handle(newReq);
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
