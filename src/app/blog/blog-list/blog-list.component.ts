import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogList = [
    {
        imgPath: 'bench-accounting-49906-unsplash',
        title: 'Established fact about watch',
        shortContent: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some ,
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some`,
        date: '12 september 16:15'
      },
    //   {
    //   imgPath: 'joshua-rawson-harris-664381-unsplash',
    //   title: 'Established fact about watch',
    //   shortContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some',
    //   date: '27 august 14:35'
    // }

  ];
  constructor() { }

  ngOnInit() {
  }

}
