import { MatDialog } from '@angular/material';
import { AppState } from './../../reducers/index';
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedIn } from 'src/app/auth/store/auth.selectors';
import { take } from 'rxjs/operators';
import { NotLoggedInDialogComponent } from 'src/app/not-loggedIn-dialog/not-loggedIn-dialog.component';

@Directive({
  selector: '[forLoggedIn]'
})
export class ForLoggedInDirective {
isLoggedIn$: Observable<boolean>;
@Output() clicked = new EventEmitter<Event>();
@HostListener('click', ['$event']) onclick(e) {
  this.isLoggedIn$
  .pipe(take(1))
  .subscribe((res) => {
    if (res) {
      this.clicked.next(e);
    } else {
      console.log('not loggedin');
      this.dialog.open(NotLoggedInDialogComponent);
    }
  });
}
  constructor(private store: Store<AppState>, private dialog: MatDialog) {
     this.isLoggedIn$ = store.select(isLoggedIn);
  }

}
