import { FileManagerItem } from './../../file-manager-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @Input() item: FileManagerItem;
  @Output() public remove = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
}
