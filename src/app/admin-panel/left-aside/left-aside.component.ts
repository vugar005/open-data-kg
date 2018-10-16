import { Component, OnInit } from '@angular/core';
import {faAccusoft} from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
@Component({
  selector: 'left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss']
})
export class LeftAsideComponent implements OnInit {
  faAccusoft = faAccusoft;
  structureName$: Observable<string>;
  structureImgUrl$: Observable<string>;
  hostname: string;
  token$: Observable<string>;
  constructor() { }

  ngOnInit() {
  }

}
