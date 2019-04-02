import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { TryLogin } from '../store/auth.actions';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { loadExternalScripts } from 'src/app/shared/shared-methods';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';
declare var Typed;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])]
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  // @HostBinding('@fadeIn')
  @ViewChild('f') ntForm: NgForm;
  animate = true;
  typed: any;
  hide = true;
  promiseBtnAction: Observable<any>;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }
  onSubmit(f: NgForm) {
    if (!f.valid) {return; }
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
