import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  DoCheck,
  ChangeDetectorRef
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { WaveParticlesComponent } from '../wave-particles/wave-particles.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { DatasetTypeAheadAdapter } from 'src/app/datasets/dataset-typeahead.adapter';
import { environment } from 'src/environments/environment';
import { getAppLanguage } from 'src/app/shared/store/ui.selectors';
@Component({
  selector: 'desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopComponent implements OnInit, AfterViewInit, DoCheck {
  @ViewChild('wave')
  wave: WaveParticlesComponent;
  faSearch = faSearch;
  faChevronRight = faChevronRight;
  globalNavClass$: Observable<string>;
  inputValue: string;
  adapter = new  DatasetTypeAheadAdapter(this.http);
  isProd: boolean;
  constructor(private store: Store<AppState>, private router: Router, private http: HttpClient, private changeRef: ChangeDetectorRef) {
     this.isProd = environment.production;
 }

  ngOnInit() {
   // this.changeRef.detach();
  }

  ngDoCheck() {
  //  / console.log('CD in Desktop ')
  }
  resetMouse() {
    if (!this.wave) {
      return;
    }
    this.wave.resetMouse();
  }
  ngAfterViewInit() {
  }
handleResultSelected(e: any) {
  console.log(e);
  if (!e) {
    this.handleShowAll();
   return;
  }
  this.router.navigate(['/home/datasets/', e.id]);
}
handleShowAll() {
 this.router.navigate(['/home/datasets/searchResults'], {queryParams: {query: this.inputValue}});
}
}
