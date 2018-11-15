import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'news-sidebar-item-list',
  templateUrl: './news-sidebar-item-list.component.html',
  styleUrls: ['./news-sidebar-item-list.component.scss']
})
export class NewsSidebarItemListComponent implements OnInit {
   @Input() items;
    render = false;
  constructor() { }

  ngOnInit() {
    console.log('ini')
    setTimeout(() => {
      this.render = true;
      console.log('timeo')
    }, 3000);
  }
}
