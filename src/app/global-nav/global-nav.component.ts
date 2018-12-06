import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
      name: '--categories',
      icon_url: './assets/icons/database.png',
      link: 'category'
    },
    {
      name: '--organizations',
      icon_url: './assets/icons/database(2).png',
      link: 'organization'
    },
    {
      name: '--latest',
      icon_url: './assets/icons/user(1).png',
      link: 'community'
    },
    {
      name: '--popular',
      icon_url: './assets/icons/database(3).png',
      link: 'popular'
    }
  ];
  state = 'category';
  constructor(private router: Router) {
  if (this.router.url.includes('category')) {
    this.state = 'category';
  } else if (this.router.url.includes('organization')) {
    this.state = 'organization';
  }
  }

onNavigate(link: string) {
  this.state = link;
  this.navChanged.emit(link);
}
}
