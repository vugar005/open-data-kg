import { Component, OnInit, AfterViewInit } from '@angular/core';
import { loadExternalScripts } from 'src/app/shared/methods/loadExternals';
declare var CountUp;
@Component({
  selector: 'total-datasets-count',
  templateUrl: './total-datasets-count.component.html',
  styleUrls: ['./total-datasets-count.component.scss']
})
export class TotalDatasetsCountComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    loadExternalScripts('./assets/scripts/countupjs/countUp.min.js')
    .then(res => {
     this.initCountup();
    });
  }
  initCountup() {
    const options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
      };
      const elements = document.getElementsByClassName('count');
      Array.from(elements).forEach(el => {
        const demo = new CountUp(el, 0, 94, 0, 2.5, options);
        if (!demo.error) {
          demo.start();
        } else {
          console.error(demo.error);
        }
      });
  }

}
