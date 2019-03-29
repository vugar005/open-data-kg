import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from 'src/app/datasets/models/dataset.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dataset-statistics',
  templateUrl: './dataset-statistics.component.html',
  styleUrls: ['./dataset-statistics.component.scss']
})
export class DatasetStatisticsComponent implements OnInit {
  @Input() datasets: Dataset[];
  @Input() caption: string;
  type = 'stackedbar2d';
  data: any;
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.buildChartData(this.datasets);
  }
  buildChartData(datasetData) {
    const datasets = datasetData.map(item => {
      return {
        "seriesname": item.name,
          "data": [
            {
              "value": item.count
            },
          ]
      }
    }).reverse();
    this.data = {
      "chart": {
        "caption": this.translateService.instant(this.caption),
        "placevaluesinside": "1",
        "showvalues": "0",
        "plottooltext": "<b>$dataValue</b>  $seriesName visitors",
        "theme": "fusion",
        "showToolBarButtonTooltext": "0"
      },
      "categories": [
        {
          "category": [
            {
            }
          ]
        }
      ],
      "dataset": [
        ...datasets
      ]
    }
  }

}
