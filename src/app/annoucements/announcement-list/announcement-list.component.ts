import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {
  @ViewChild(SwiperDirective) swiper?: SwiperDirective;
  public config: SwiperConfigInterface = {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.arrow-left',
      prevEl: '.arrow-right',
    },
  };
  itemsList = [{
    imgPath: '',
    content: `It is a long established fact that a reader will be distracted by the readable content of
    a page when looking at its layout. The point of using Lorem Ipsum is
    that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
     content here', making it look like readable English`,
     date: '14 Aprl 2018'
  }
   ];
  constructor() { }

  ngOnInit() {
    this.itemsList = this.itemsList.concat(this.itemsList).concat(this.itemsList);
    this.itemsList = this.itemsList.concat(this.itemsList);
    this.itemsList = this.itemsList.concat(this.itemsList);
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
