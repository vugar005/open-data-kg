import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalNavComponent  {
  @Output() navChanged = new EventEmitter<string>();
  modules = [
    {
      name: 'Categories',
      icon_url: './assets/icons/database.png',
      link: 'categories'
    },
    {
      name: 'Organizations',
      icon_url: './assets/icons/database(2).png',
      link: 'organizations'
    },
    {
      name: 'Community',
      icon_url: './assets/icons/user(1).png',
      link: 'community'
    },
    {
      name: 'Popular',
      icon_url: './assets/icons/database(3).png',
      link: 'popular'
    }
  ];
  constructor() { }

onNavigate(link: string) {
  console.log('on click');
  this.navChanged.emit(link);
}
}
