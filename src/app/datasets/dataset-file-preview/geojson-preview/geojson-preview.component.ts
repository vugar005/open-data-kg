import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatasetDetail } from '../../models/dataset-detail.model';
import { MockGeoData } from './mock-geo-data';
declare var mapboxgl;
declare var L;
@Component({
  selector: 'geojson-preview',
  templateUrl: './geojson-preview.component.html',
  styleUrls: ['./geojson-preview.component.scss']
})
export class GeojsonPreviewComponent implements OnInit, AfterViewInit {
  @Input() link: string;
  loaded: boolean;
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  ngAfterViewInit() {
     // this.initMap(MockGeoData);
     console.log(this.link)
    this.getGeoData(this.link).subscribe(res => {
      this.initMap(res);
    });
  }
  getGeoData(src: string): Observable<any> {
    return this.http.get(src);
  }
  initTempMap(data) {
    mapboxgl.accessToken =
    'pk.eyJ1IjoidnVnYXIwMDUiLCJhIjoiY2pxeXlnZTN6MDY4YjQ4cGNqdjNxMWR5NiJ9.OGA_mWNupCbAIs3dL6w41Q';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-26, 27.8],
    zoom: 2
  });
   const layer = L.mapbox.featureLayer()
  .loadURL('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson')
  .addTo(map);
  }
  initMap(data) {
    mapboxgl.accessToken =
      'pk.eyJ1IjoidnVnYXIwMDUiLCJhIjoiY2pxeXlnZTN6MDY4YjQ4cGNqdjNxMWR5NiJ9.OGA_mWNupCbAIs3dL6w41Q';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-26, 27.8],
      zoom: 2
    });
    map.on('load', () => {
      map.addLayer({
        id: 'maine',
        type: 'fill',
        source: {
          type: 'geojson',
          data: data
        },
        layout: {},
        paint: {
          'fill-color': '#088',
          'fill-opacity': 0.8
        }
      });
      map.addControl(new mapboxgl.NavigationControl());
    this.loaded = true;
    });
  }
}
