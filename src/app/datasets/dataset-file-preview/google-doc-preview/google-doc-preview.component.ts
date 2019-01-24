import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'google-doc-preview',
  templateUrl: './google-doc-preview.component.html',
  styleUrls: ['./google-doc-preview.component.scss']
})
export class GoogleDocPreviewComponent implements OnInit, OnDestroy {
  @Input() link = 'https://drive.google.com/viewerng/viewer?url=https://calibre-ebook.com/downloads/demos/demo.docx&embedded=true';
  safeUrl: SafeResourceUrl;
  iframeLoaded$ = new Subject<boolean>();
  _onDestroy$ = new Subject<void>();
  loadSubscription: Subscription;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    interval(2000).pipe(takeUntil(this.iframeLoaded$), takeUntil(this._onDestroy$)).subscribe(res => this.getSafeLink());
  }
  onIframeLoad() {
    console.log('loaded')
    this.iframeLoaded$.next(true);
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  getSafeLink() {
    console.log('get safe');
    console.log(this.link)
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

}
