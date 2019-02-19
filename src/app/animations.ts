import { animation, animate, keyframes, style, query, stagger } from '@angular/animations';

export const slideInNews = animation([
query(':enter', [
  style({ opacity: 0, transform: 'translateX(100%)', height: 0, margin: 0}),
  stagger(150, [
    animate('0.5s 0.9s ease-out', keyframes([
      style({opacity: 0,  transform: 'translateX(100%)', height: '98px', 'margin-bottom': '0.3125rem', offset: 0}),
      style({opacity: 1,  transform: 'translateX(0)',   offset: 1}),
    ]))
  ])
], {optional: true}
),
query(':leave', [
  stagger(150, [
    animate('0.5s', keyframes([
      style({opacity: 0, transform: 'translateX(100%)', offset: 1}),
    ]))
  ])
], {optional: true}
)
]

);

//0 .5 09
