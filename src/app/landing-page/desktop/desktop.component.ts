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
  typed: any;
  constructor(private store: Store<AppState>) {
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
