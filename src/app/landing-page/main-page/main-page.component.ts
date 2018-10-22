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
import { AppState } from '../../reducers';
import { Observable } from 'rxjs';
import { getGlobalNavClass } from '../../shared/store/ui.selectors';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild('wave')
  wave: WaveParticlesComponent;
  faSearch = faSearch;
  faChevronRight = faChevronRight;
  globalNavClass$: Observable<string>;
  typed: any;
  constructor(private store: Store<AppState>) {
    this.globalNavClass$ = store.select(getGlobalNavClass);
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
}
