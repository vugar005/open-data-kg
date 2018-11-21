import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dataset-box',
  templateUrl: './dataset-box.component.html',
  styleUrls: ['./dataset-box.component.scss']
})
export class DatasetBoxComponent implements OnInit {
  @Input() dataset: any;
  constructor() { }

  ngOnInit() {
   this.dataset.allFormat.split(' ').forEach(element => {
     console.log(element)
   });
  }

}
