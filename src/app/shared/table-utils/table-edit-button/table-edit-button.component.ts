import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-edit-button',
  template: `
    <span class="burger-dot"> </span>
    <span class="burger-dot"> </span>
    <span class="burger-dot"> </span>
    <span class="burger-dot"> </span>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .burger-dot {
        width: 4px;
        height: 4px;
        background: #bdc3c7;
        border-radius: 4px;
        margin-top: 2px;
        top: 6px;
        display: inline-block;
      }
    `
  ]
})
export class TableEditButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
