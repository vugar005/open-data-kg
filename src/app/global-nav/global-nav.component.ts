import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalNavComponent implements OnChanges  {
  @Output() navChanged = new EventEmitter<string>();
  @Input() state: string = 'category';
  modules = [
    {
      name: '~categories',
      icon_url: './assets/icons/database.png',
      link: 'category'
    },
    {
      name: '~organizations',
      icon_url: './assets/icons/database(2).png',
      link: 'organization'
    },
    {
      name: '~latest',
      icon_url: './assets/icons/latest.png',
      link: 'latest'
    },
    {
      name: '~popular',
      icon_url: './assets/icons/database(3).png',
      link: 'popular'
    }
  ];
  constructor(private router: Router, private changeRef: ChangeDetectorRef) {
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
ngOnChanges(changes: SimpleChanges) {
  if (changes && changes['state']) {
    this.state = changes['state'].currentValue;
    this.changeRef.detectChanges();
  }
}
}
