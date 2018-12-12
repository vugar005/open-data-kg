import { getAppLanguage } from './../store/ui.selectors';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Observable, of } from 'rxjs';
import { take, switchMap, catchError} from 'rxjs/operators';

@Injectable()
export class LangInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | any> {
    return this.store.select(getAppLanguage)
    .pipe(
      take(1),
      switchMap((lang: string) => {
        if (req.method.toLowerCase() === 'post') {
          let currentBody;
          if (typeof req.body !== 'string') {
            currentBody = req.body;
          } else {
            currentBody = JSON.parse(req.body);
          }
          let newBody = {};
           if (Object.keys(currentBody).length !== 0) {
            if (currentBody.kv) {
               newBody = {
               kv: {
                ...currentBody.kv,
                lang: lang
               }
              };
            }
           }
          const newReq =  req.clone({
            body:  Object.keys(newBody).length > 0 ?  JSON.stringify(newBody) : req.body
          });
          return next.handle(newReq);
        } else {
          return next.handle(req);
        }
      }),
      catchError(er => of(console.log(er)))
    );
  }
}
