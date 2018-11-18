import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalNavComponent  {

  constructor() { }

onClick() {
  console.log('on click')
}
}
