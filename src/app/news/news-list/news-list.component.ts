import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { SharedService } from 'src/app/shared/shared.service';
import { Observable } from 'rxjs';
import { NewsItem } from '../models/news-item.model';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(SwiperDirective) swiper?: SwiperDirective;
  slidesPerview = 4;
  public config: SwiperConfigInterface = {
    slidesPerView: this.slidesPerview,
    slidesPerGroup: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 2500,
    spaceBetween: 0,
    navigation: {
      nextEl: '.arrow-left',
      prevEl: '.arrow-right',
    },
    autoplay: {
      delay: 2500,
      stopOnLastSlide: true
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
    // {
    //   imgPath: 'crew-22252-unsplash',
    //   title: 'Established fact about watch',
    //   shortContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some',
    //   date: '22 august 14:35'
    // }
    // {
    //   imgPath: 'crew-22252-unsplash',
    //   title: 'Established fact about watch',
    //   shortContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some',
    //   date: '27 august 14:35'
    // }
  ];
  newsList$: Observable<NewsItem[]>;
  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.getNews();
  this.newsList =  this.newsList.concat(this.newsList).concat(this.newsList);
  }
  ngAfterViewInit() {
    this.swiper.indexChange.subscribe(index => {
      if (index + this.slidesPerview === this.newsList.length) {
        this.swiper.setIndex(0);
      }
    });
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
  getNews() {
   this.newsList$ = this.sharedService.getTableData('api/get/Permission/Sharing/GetNewsForCommon');
    }

}
