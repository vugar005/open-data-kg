import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { TryLogin } from '../store/auth.actions';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { NgForm } from '@angular/forms';
import { loadExternalScripts } from '../../shared/methods/loadExternals';
import { Observable } from 'rxjs';
import { User } from '../models/user.model.';
import { getUser } from '../store/auth.selectors';
declare var Typed;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])]
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  // @HostBinding('@fadeIn')
  animate = true;
  typed: any;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.typed && this.typed.destroy();
  }
  onSubmit(f: NgForm) {
    this.store.dispatch(new TryLogin(f.form.value));
  }
  ngAfterViewInit() {
    const options = {
      strings: ['Username'],
      typeSpeed: 40
    };
     loadExternalScripts('https://cdn.jsdelivr.net/npm/typed.js@2.0.9').then(res => {
     // this.typed = new Typed('.input', options);
    }).catch(er => console.log(er));
  }
}
