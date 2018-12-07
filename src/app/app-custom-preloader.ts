import { PreloadingStrategy, Route} from '@angular/router';


import { Observable,  of } from 'rxjs';


export class AppCustomPreloader implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
      // const loadRoute = (delay) => delay
      //     ? timer(300).pipe(flatMap(_ => load()))
      //     : load();
      // console.log(route)
      // if ((!window.location.href.includes('admin') && route.loadChildren.toString().includes('ent') )) {
      //   return of(null);
      // }
        return load();
    }
}
