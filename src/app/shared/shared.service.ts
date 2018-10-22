import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Injectable()
export class SharedService {
  toastRunning: boolean;
  constructor(public iziToast: Ng2IzitoastService) {}
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
}
