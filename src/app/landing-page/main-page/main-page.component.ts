import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { WaveParticlesComponent } from '../wave-particles/wave-particles.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  @ViewChild('wave') wave: WaveParticlesComponent;
  faSearch = faSearch;
  faChevronRight = faChevronRight;

  constructor() {}

  ngOnInit() {}
resetMouse() {
  if (!this.wave) {return; }
   this.wave.resetMouse();
}
}
