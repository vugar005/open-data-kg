import { SharedService } from './../../shared/shared.service';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { copyText } from 'src/app/shared/shared-methods';

@Component({
  selector: 'share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit, AfterViewInit {
  baseUrl: string;
  shareLink: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ShareDialogComponent>,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.baseUrl = 'http://opendata.neuron.az/#';
    this.shareLink = `${this.baseUrl}/home/datasets/${this.data}`;
  }
  ngAfterViewInit() {
  }
  popupFacebook() {
    const url = 'http://www.facebook.com/sharer.php?u=' + this.shareLink;
    const newWindow = window.open(
      url,
      'name',
      'height=500,width=520,top=200,left=300,resizable'
    );
    if (window.focus) {
      newWindow.focus();
    }
  }
  popupTweet() {
    const url = 'https://twitter.com/intent/tweet?text=' + this.shareLink;
    const newWindow = window.open(
      url,
      'name',
      'height=500,width=520,top=200,left=300,resizable'
    );
    if (window.focus) {
      newWindow.focus();
    }
  }
  popupLinkedin() {
    const url =
      'https://www.linkedin.com/shareArticle?mini=true&url=' + this.shareLink;
    const newWindow = window.open(
      url,
      'name',
      'height=500,width=520,top=200,left=300,resizable'
    );
    if (window.focus) {
      newWindow.focus();
    }
  }
  onCopy(val: string) {
    copyText(val, this.sharedService);
  }
}
