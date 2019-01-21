import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { getApiUrl } from 'src/app/auth/store/auth.selectors';
import { take, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getApiUrl)
    .pipe(
      take(1),
      switchMap((api: string) => {
        if (req.url.includes('.json')) { return next.handle(req); }
        if (req.url.includes('.svg')) { return next.handle(req); }
        if (req.url.includes('geoJSON')) { return next.handle(req); }
        const apiReq = req.clone({ url: `${api}/${req.url}` });
        return next.handle(apiReq);
      })
    );
  }
}
