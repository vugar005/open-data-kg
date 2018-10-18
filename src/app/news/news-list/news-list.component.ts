import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { SwiperConfigInterface, SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
declare var Swiper;
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(SwiperDirective) swiper?: SwiperDirective;
  public config: SwiperConfigInterface = {
    slidesPerView: 4,
    slidesPerGroup: 4,
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
      disableOnInteraction: true
    },
  };
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
    {
      imgPath: 'crew-22252-unsplash',
      title: 'Established fact about watch',
      shortContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some',
      date: '22 august 14:35'
    }
    // {
    //   imgPath: 'crew-22252-unsplash',
    //   title: 'Established fact about watch',
    //   shortContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some',
    //   date: '27 august 14:35'
    // }
  ];
  constructor(private store: Store<AppState>) {
//    store.dispatch(new ChangeGlobalNavClass('top'));
  }

  ngOnInit() {
  this.newsList =  this.newsList.concat(this.newsList).concat(this.newsList);
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
  }
  slidePrev() {
    if (!this.swiper) {return; }
    this.swiper.prevSlide();
  }
  slideNext() {
    if (!this.swiper) {return; }
   this.swiper.nextSlide();
  }

}
