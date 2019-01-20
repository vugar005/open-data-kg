import { FileManagerItem } from './../../file-manager-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { copyText } from 'src/app/shared/shared-methods';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @Input() item: FileManagerItem;
  @Output() public remove = new EventEmitter<string>();
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }
  copyLink(item: FileManagerItem) {
    const hostname = localStorage.getItem('kg_hostname');
    const url = `${hostname}/api/get/file/${item.id}`;
    copyText(url, this.sharedService);
  }
}
