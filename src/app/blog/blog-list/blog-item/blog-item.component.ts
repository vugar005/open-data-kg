import { Component, OnInit, Input } from '@angular/core';
import { bounceInRight} from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
  animations: [
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight, {
      params: { timing: 2.5, delay: 0 }
    }))])
  ],
})
export class BlogItemComponent implements OnInit {
  @Input() blog: any;
  @Input() index: number;
  bounceInRight = bounceInRight;
  ready: boolean;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.ready = true;
      // this.changeDetectorRef.detectChanges();
    }, this.index * 150);
  }
}
