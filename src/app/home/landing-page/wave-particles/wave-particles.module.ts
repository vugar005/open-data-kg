import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WaveParticlesComponent} from './wave-particles.component';
@NgModule({
  declarations: [WaveParticlesComponent],
  imports: [
    CommonModule
  ],
  exports: [WaveParticlesComponent]
})
export class WaveParticlesModule { }
