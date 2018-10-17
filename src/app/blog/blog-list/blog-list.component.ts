import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
declare var Swiper;
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, AfterViewInit, OnDestroy {
  swiper: any;
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
    this.blogList = this.blogList.concat(this.blogList).concat(this.blogList);
  }
  ngOnDestroy() {
    try {
      console.log(this.swiper);
      this.swiper.detach();
      this.swiper.destroy(true, true);
      this.swiper = undefined;
     } catch (er) {
       console.log(er);
     }
  }
  ngAfterViewInit() {
    this.initSwiper();
  }
  slidePrev() {
    this.swiper.slidePrev();
  }
  slideNext() {
   this.swiper.slideNext();
  }
  initSwiper() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: '2',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        spaceBetween: 0
      },
      spaceBetween: 5,
      navigation: {
        nextEl: '.arrow-left',
        prevEl: '.arrow-right',
      },
    });
    console.log(this.swiper)
  }
}
