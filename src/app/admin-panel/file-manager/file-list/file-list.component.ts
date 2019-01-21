import { FileManagerItem } from './../file-manager-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  @Output() public remove = new EventEmitter<string>();
  @Output() public itemSelected = new EventEmitter<FileManagerItem>();
  @Input() items: FileManagerItem[];
  constructor() { }

  ngOnInit() {
  }

}
