import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class SharedService {
  toastRunning: boolean;
  constructor(public iziToast: Ng2IzitoastService, private jwtService: JwtHelperService) {}
  createNotification(type: string, message: string) {
    this.clearOldToats();
    switch (type) {
      case 'error':
      this.createErrorNotification(message);
      break;
      case 'warning':
      this.createWarnNotification(message);
      break;
    }
}
createErrorNotification(message: string) {
  this.iziToast.show({
    title: 'Error',
    class: 'foo',
    color: 'red',
    timeout: 3000,
    message: message,
    icon: 'fas fa-exclamation-circle',
    progressBarColor: '#9D787A',
    close: false,
});
}
createWarnNotification(message: string) {
  this.iziToast.show({
    title: 'Warning',
    class: 'foo',
    color: '#FACBA0',
    timeout: 3000,
    message: message,
    icon: 'fas fa-exclamation',
    progressBarColor: '#9D787A',
    transitionOut: 'flipOutX',
    close: false,
});
}
clearOldToats() {
  const toasts = document.getElementsByClassName('foo');
   Array.from(toasts).forEach((toast: HTMLElement) => toast.style.display = 'none');
}
canAutoLogin() {
  try {
    const jwtToken = localStorage.getItem('kg-token');
    const user = JSON.parse(localStorage.getItem('kg-user'));
    if (!(jwtToken && user)) {
        return;
    }
    const isExpired = this.jwtService.isTokenExpired(jwtToken);
  //  if (isExpired) {return; }
    const decoded = this.jwtService.decodeToken(jwtToken);
    if (!decoded) {return; }
   // this.store.dispatch(new SetToken({jwtToken, decoded}));
   // this.store.dispatch(new SetUser(user));
   } catch (er) {
     console.log(er);
   }
}
}
