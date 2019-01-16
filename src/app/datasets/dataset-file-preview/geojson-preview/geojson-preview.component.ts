import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatasetDetail } from '../../models/dataset-detail.model';
import { MockGeoData } from './mock-geo-data';
declare var d3;
@Component({
  selector: 'geojson-preview',
  templateUrl: './geojson-preview.component.html',
  styleUrls: ['./geojson-preview.component.scss']
})
export class GeojsonPreviewComponent implements OnInit, AfterViewInit {
  @Input() src: string;
  @Input() dataset: DatasetDetail;
  datasetApi: DatasetDetail;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.initD3Geo(MockGeoData);
    }, 0)
    // this.getGeoData('http://demo8764036.mockable.io/sample-geoJSON').subscribe(res => {
    //   this.initD3Geo(res);
    // });
  }
  getGeoData(src: string): Observable<any> {
    return this.http.get(src);
  }
  initD3Geo(data) {
    console.log(data)
    const width = 600;
    const height = 600;
    const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
    const projection = d3.geoMercator()
     .center([80, 25])
     .scale(width)
      .translate([width / 2, height / 2]);

      const path = d3.geoPath().projection(projection);
      svg.append('path')
          .attr('d', path(data))
          .attr('fill', '#539EC0')
          .attr('stroke', '#fff')
          .attr('stroke-width', 1);
  }

}
