import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInRight, slideInLeft, slideOutRight } from 'ng-animate';

@Component({
  selector: 'news-sidebar',
  templateUrl: './news-sidebar.component.html',
  styleUrls: ['./news-sidebar.component.scss'],
  animations: [
    trigger('slideOutRight', [transition(':leave', useAnimation(slideOutRight, { params: { timing: 0.500, delay: 0 }}))])
  ],
})
export class NewsSidebarComponent implements OnInit {
  render = false;
  startIndex = 7;
  endIndex = 10;
  slideOutRight= true;
  items = [
    {
      imgUrl: './assets/img/image.png',
      title: 'Why do we use it 1',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
    {
      imgUrl: './assets/img/image.png',
      title: 'Why do we use it 2',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
    {
      imgUrl: './assets/img/image.png',
      title: 'Why do we use it 3',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
     {
      imgUrl: './assets/img/joshua-rawson-harris-664381-unsplash.png',
      title: 'Today news 4',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
     {
      imgUrl: './assets/img/joshua-rawson-harris-664381-unsplash.png',
      title: 'Today news 5',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
     {
      imgUrl: './assets/img/joshua-rawson-harris-664381-unsplash.png',
      title: 'Today news 6',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
     {
      imgUrl: './assets/img/joshua-rawson-harris-664381-unsplash.png',
      title: 'Today news 7',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
     {
      imgUrl: './assets/img/joshua-rawson-harris-664381-unsplash.png',
      title: 'Today news 8',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
     {
      imgUrl: './assets/img/joshua-rawson-harris-664381-unsplash.png',
      title: 'Today news 9',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
     {
      imgUrl: './assets/img/joshua-rawson-harris-664381-unsplash.png',
      title: 'Today news 10',
      content: `It is a long established fact that a reader will be
       distracted by the readable content of ... `,
      date: `27.08.2018 `
    },
  ];
  constructor() { }

  ngOnInit() {
    console.log('ini');
    setTimeout(() => {
      this.render = true;
      console.log()
    }, 3000);
  }
  onPrev() {
    if (this.startIndex === 0) {return; }
    this.startIndex -= 1;
    this.endIndex -= 1;
  }
  onNext() {
    if (this.endIndex === 10) {return; }
    this.startIndex += 1;
    this.endIndex += 1;
  }


}
