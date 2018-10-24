import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(SwiperDirective) swiper?: SwiperDirective;
  slidesPerView = 2;
  public config: SwiperConfigInterface = {
    slidesPerView: this.slidesPerView,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 0,
    navigation: {
      nextEl: '.arrow-left',
      prevEl: '.arrow-right',
    },
    autoplay: {
      delay: 2500,
      stopOnLastSlide: true
    },
    speed: 2500,
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
      {
        imgPath: 'bench-accounting-49906-unsplash',
        title: 'Established fact about watch',
        shortContent: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some ,
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some`,
        date: '12 september 16:15'
      },

  ];
  constructor(private store: Store<AppState>) {
   }

  ngOnInit() {
    this.blogList = this.blogList.concat(this.blogList).concat(this.blogList);
  }
  ngOnDestroy() {

  }
  ngAfterViewInit() {
    this.swiper.indexChange.subscribe(index => {
      if (index + this.slidesPerView === this.blogList.length) {
        this.swiper.setIndex(0);
      }
    });
  }
  slidePrev() {
    try {
      this.swiper.prevSlide();
    } catch (er) {
    console.log(er);
    }
  }
  slideNext() {
    try {
      this.swiper.nextSlide();
    } catch (er) {
    console.log(er);
    }
  }
}
