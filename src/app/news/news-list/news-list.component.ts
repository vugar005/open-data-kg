import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsList = [
    {
        imgPath: 'patrick-tomasso-88398-unsplash',
        title: 'Established fact about watch',
        shortContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some',
        date: '12 september 16:15'
      },
      {
      imgPath: 'joshua-rawson-harris-664381-unsplash',
      title: 'Established fact about watch',
      shortContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some',
      date: '27 august 14:35'
    },
    {
      imgPath: 'crew-22252-unsplash',
      title: 'Established fact about watch',
      shortContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some',
      date: '22 august 14:35'
    },
    // {
    //   imgPath: 'crew-22252-unsplash',
    //   title: 'Established fact about watch',
    //   shortContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some',
    //   date: '27 august 14:35'
    // }
  ];
  constructor() { }

  ngOnInit() {
  }

}
