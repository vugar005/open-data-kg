import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(SwiperDirective) swiper?: SwiperDirective;
  public config: SwiperConfigInterface = {
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 0,
    navigation: {
      nextEl: '.arrow-left',
      prevEl: '.arrow-right',
    },
  };
  blogList = [
    {
        imgPath: 'bench-accounting-49906-unsplash',
        title: 'Established fact about watch',
        shortContent: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some ,
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some`,
        date: '12 september 16:15'
      },

  ];
  constructor() { }

  ngOnInit() {
    this.blogList = this.blogList.concat(this.blogList).concat(this.blogList);
  }
  ngOnDestroy() {

  }
  ngAfterViewInit() {
  }
  slidePrev() {
    try {
      this.swiper.nextSlide();
    } catch (er) {
    console.log(er);
    }
  }
  slideNext() {
    console.log('nex')

    try {
      this.swiper.prevSlide();
    } catch (er) {
    console.log(er);
    }
  }
}
