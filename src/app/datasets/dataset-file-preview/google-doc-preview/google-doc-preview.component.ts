import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'google-doc-preview',
  templateUrl: './google-doc-preview.component.html',
  styleUrls: ['./google-doc-preview.component.scss']
})
export class GoogleDocPreviewComponent implements OnInit {
  @Input() link: string;
  safeUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

}
