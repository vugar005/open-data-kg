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
  @Input() link;
  safeUrl: SafeResourceUrl;
  iframeLoaded$ = new Subject<boolean>();
  _onDestroy$ = new Subject<void>();
  loadSubscription: Subscription;
  loaded: boolean;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
     this.getSafeLink();
   interval(5000).pipe(takeUntil(this.iframeLoaded$), takeUntil(this._onDestroy$)).subscribe(res => this.getSafeLink());
  }
  onIframeLoad() {
    console.log('loaded');
    // https://drive.google.com/viewerng/viewer?url=https://calibre-ebook.com/downloads/demos/demo.docx&embedded=true
    this.iframeLoaded$.next(true);
    this.loaded = true;
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  getSafeLink() {
    if (this.loaded) {return; }
    this.safeUrl = null;
    console.log('get safe');
    console.log(this.link);
    setTimeout(() => {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
    }, 10);
  }

}
