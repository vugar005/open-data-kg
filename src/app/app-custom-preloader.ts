import { PreloadingStrategy, Route} from '@angular/router';


import { Observable,  of, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


export class AppCustomPreloader implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
      const loadRoute = (delay) => delay
          ? timer(300).pipe(flatMap(_ => load()))
          : load();
      if ((!window.location.href.includes('admin') && route.loadChildren.toString().includes('ent') || !environment.production )) {
        return of(null);
      }
        return load();
    }
}
