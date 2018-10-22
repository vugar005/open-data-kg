import {
  Component,
  OnInit,
  HostBinding,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { SetToken, TryLogin } from '../store/auth.actions';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { ChangeHeaderClass } from '../../shared/store/ui.actions';
import { NgForm } from '@angular/forms';
import { loadExternalScripts } from '../../shared/methods/loadExternals';
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
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new ChangeHeaderClass('hide'));
  }
  ngOnDestroy() {
    this.store.dispatch(new ChangeHeaderClass(''));
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
      this.typed = new Typed('.input', options);
    }).catch(er => console.log(er));
  }
}
