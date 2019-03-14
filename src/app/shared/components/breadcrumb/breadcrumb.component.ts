import { Component, OnInit, Input } from '@angular/core';
import { BreadCrumb } from '../../models/breadcrumb.model';
import {Location} from '@angular/common';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbs: BreadCrumb[];
  constructor(public location: Location) { }

  ngOnInit() {
    console.log(this.breadcrumbs)
  }

}
