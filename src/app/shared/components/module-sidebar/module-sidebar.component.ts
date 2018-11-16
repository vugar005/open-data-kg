import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'module-sidebar',
  templateUrl: './module-sidebar.component.html',
  styleUrls: ['./module-sidebar.component.scss']
})
export class ModuleSidebarComponent implements OnInit {
 items = [
  {
    name: 'Family',
    count: 7
  },
  {
    name: 'Social',
    count: 7
  },
  {
    name: 'Agicalture and Envi',
    count: 5
  },
  {
    name: 'Family',
    count: 10
  },
  {
    name: 'Social',
    count: 9
  },
  {
    name: 'Agicalture',
    count: 7
  },
  {
    name: 'Family',
    count: 12
  },
  {
    name: 'Social',
    count: 7
  },
  {
    name: 'Agicalture',
    count: 7
  },
 ];
  constructor() { }

  ngOnInit() {
  }

}
