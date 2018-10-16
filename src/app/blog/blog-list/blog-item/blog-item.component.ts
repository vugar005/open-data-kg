import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blog: any;
  constructor() { }

  ngOnInit() {
  }

}
