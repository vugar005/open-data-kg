import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'other-json-preview',
  templateUrl: './other-json-preview.component.html',
  styleUrls: ['./other-json-preview.component.scss']
})
export class OtherJsonPreviewComponent implements OnInit {
  @Input() link;
  data;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${this.link}&type=serverApi`,  { responseType: 'text' }).subscribe(res => {
      this.data = res;
      console.log(res);
    });
  }

}
