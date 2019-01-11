import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { SharedService } from 'src/app/shared/shared.service';
import { NewsItem } from '../models/news-item.model';
import { NewsQuery } from '../models/news-query.model';
import { NgForm } from '@angular/forms';
import { getPaginationRange } from 'src/app/app.utils';
declare var Swiper;
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, AfterViewInit, OnDestroy {
  slidesPerView: number;
  slideCount = 7;
  public config: SwiperConfigInterface;
  newsList: NewsItem[] = [];
  swiper: any;
  pageIndex = 0;
  newsQuery = new NewsQuery();
  rowCount: number;
  rangeArray = [];
  @HostListener('window:resize', ['$event']) resize() {this.onWindowResize(); }
  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.getSlidesPerView();
    this.initSwiper();
    this.getNews();
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.swiper && this.swiper.destroy();
  }
  getSwiperConfig() {
    return {
      slidesPerView: this.getSlidesPerView(),
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        speed: 1500,
        spaceBetween: 0,
        navigation: {
          nextEl: '.arrow-left',
          prevEl: '.arrow-right',
        },
        // autoplay: {
        //   delay: 2500,
        //   stopOnLastSlide: true
        // },
      };
  }
  onPageChange(p) {
    if (isNaN(p)) {return; }
    this.buildPagination(p);
    this.pageIndex = p - 1;
    this.getNews();
  }
  buildPagination(startIndex: number) {
   this.rangeArray = getPaginationRange(startIndex, this.rowCount);
  }
  onWindowResize() {
    this.getSlidesPerView();
    this.initSwiper();
  }
  getSlidesPerView() {
    let value: number;
    if (window.innerWidth > 1500) {
      value = this.slidesPerView = 6;
    } else if (window.innerWidth > 1199) {
     value = this.slidesPerView = 5;
    } else if (window.innerWidth > 992) {
     value =  this.slidesPerView = 4;
    }
    return value;
  }
  buidRange(p: number): string {
    if (isNaN(p)) {return '....'; }
    if (this.slidesPerView * p > this.rowCount) {return; }
   return  `[${(p - 1) * this.slidesPerView} - ${this.slidesPerView * p}]`;
  }
  initSwiper() {
    const config = this.getSwiperConfig();
    setTimeout(() => {
        this.swiper = new Swiper('.swiper-container', config);
    }, 0);
  }
  slidePrev() {
    if (!this.swiper) {return; }
    this.swiper.slidePrev();
  }
  slideNext() {
    if (!this.swiper) {return; }
    this.swiper.slideNext();
    // if (this.swiper.end) {
    //   this.swiper.slideTo(0);
    // } else {
    //   this.swiper.slideNext();
    // }
  }
  getNews(query = new NewsQuery()) {
    this.newsList = [];
    const body = {
      kv: {
        startLimit: this.pageIndex * this.slideCount,
        endLimit: this.pageIndex * (this.slideCount) + this.slideCount,
        ...query
      }
    };
   this.sharedService.getTableData('api/get/Permission/Sharing/GetNewsForCommon', body)
   .subscribe(res => {
     if (!res) {return; }
     this.newsList = (res.r);
     this.rowCount = res.rowCount;
    this.buildPagination(1);
      this.initSwiper();
    });
  }
    onNewsFilter(form: NgForm) {
      this.newsList = [];
      this.getNews(form.value);
    }
    handleResultSelected(e: any) {
      if (!e.data) {
      //  this.handleShowAll(e.form);
       return;
      }
      this.getNews();
    }

}
