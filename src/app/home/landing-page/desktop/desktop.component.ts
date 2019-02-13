import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { WaveParticlesComponent } from '../wave-particles/wave-particles.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { DatasetTypeAheadAdapter } from 'src/app/datasets/dataset-typeahead.adapter';
@Component({
  selector: 'desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit, AfterViewInit {
  @ViewChild('wave')
  wave: WaveParticlesComponent;
  faSearch = faSearch;
  faChevronRight = faChevronRight;
  globalNavClass$: Observable<string>;
  inputValue: string;
  adapter = new  DatasetTypeAheadAdapter(this.http);
  constructor(private store: Store<AppState>, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {}
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
