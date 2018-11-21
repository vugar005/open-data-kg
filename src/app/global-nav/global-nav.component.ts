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
  state = 'categories';
  constructor(private router: Router) {
  if (this.router.url.includes('categories')) {
    this.state = 'categories';
  } else if (this.router.url.includes('organizations')) {
    this.state = 'organizations';
  }
  }

onNavigate(link: string) {
  this.state = link;
  this.navChanged.emit(link);
}
}
