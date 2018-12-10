import { getAppLanguage } from './../store/ui.selectors';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { take, switchMap} from 'rxjs/operators';

@Injectable()
export class LangInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getAppLanguage)
    .pipe(
      take(1),
      switchMap((lang: string) => {
        if (req.method.toLowerCase() === 'post') {
          let newBody = {};
          console.log(req.body);
           if (Object.keys(req.body).length !== 0.) {
            if (req.body.kv) {
               newBody = {
               kv: {
                ...req.body.kv,
                lang: lang
               }
              };
            }
           }
          const newReq =  req.clone({
            body: JSON.stringify(newBody) || req.body
          });
          return next.handle(newReq);
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
