import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { loadExternalScripts } from '../../shared/methods/loadExternals';
declare var THREE;
@Component({
  selector: 'wave-particles',
  templateUrl: './wave-particles.component.html',
  styleUrls: ['./wave-particles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaveParticlesComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('container')
  elementRef: ElementRef;
  SEPARATION = 100;
  AMOUNTX = 35; // 35
  AMOUNTY = 35; // 35
  particles = [];
  particle;
  count = 0;

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  container: HTMLElement;
  camera;
  scene: any;
  renderer;
  req: any;
  mouseX = 170;
  mouseY = -294;
  @HostListener('mousemove')
  mousemove() {
    this.onDocumentMouseMove(event);
  }
  @HostListener('touchstart')
  touchstart() {
    this.onDocumentTouchStart(event);
  }
  @HostListener('touchemove')
  touchemove() {
    this.onDocumentTouchMove(event);
  }
  @HostListener('window:resize')
  resize() {
    this.onWindowResize();
  }
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.initWaves();
    // this.loadThreejs()
    //   .then(res => {
    //     this.initWaves();
    //   });
  }
  initWaves() {
    this.scene = THREE.Scene;
    this.init();
    this.animate();
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.req);
  }
  loadThreejs() {
    return loadExternalScripts('./assets/scripts/threejs/three-compact.js');
  }
  resetMouse() {
    this.mouseX = 170;
    this.mouseY = -294;
    this.changeDetectorRef.detectChanges();
  }

  init() {
    this.container = this.elementRef.nativeElement;
    // document.body.appendChild(this.container);
    if (this.container) {
      this.container.className += this.container.className ? ' waves' : 'waves';
    }
    this.camera = new THREE.PerspectiveCamera(
      75, // 120
      window.innerWidth / window.innerHeight,
      1, // 0.1
      10000 // 2000
    );
    //  this.camera.position.y = 100;
    this.camera.position.z = 1000; // 50
    //  this.camera.rotation.x = 0.25; // 0.35
    this.scene = new THREE.Scene();
    this.particles = new Array();
    const PI2 = Math.PI * 2;
    const material = new THREE.SpriteCanvasMaterial({
      color: 0xffffff,
      transparent: true, opacity: 0.8 ,
      program: function(context) {
        context.beginPath();
        context.arc(0, 0, 0.2, 0, PI2, true); // (0, 0, 0.1, 0, PI2
        context.fill();
      }
    });

    let i = 0;
    for (let ix = 0; ix < this.AMOUNTX; ix++) {
      for (let iy = 0; iy < this.AMOUNTY; iy++) {
        this.particle = this.particles[i++] = new THREE.Sprite(material);
        this.particle.position.x =
          ix * this.SEPARATION - (this.AMOUNTX * this.SEPARATION) / 2;
        this.particle.position.z =
          iy * this.SEPARATION - (this.AMOUNTY * this.SEPARATION) / 2;
        this.scene.add(this.particle);
      }
    }

    this.renderer = new THREE.CanvasRenderer({ alpha: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
  }
  animate() {
    this.req = requestAnimationFrame(this.animate.bind(this));

    this.render();
  }
  render() {
    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);
    let i = 0;
    for (let ix = 0; ix < this.AMOUNTX; ix++) {
      for (let iy = 0; iy < this.AMOUNTY; iy++) {
        this.particle = this.particles[i++];
        this.particle.position.y =
          Math.sin((ix + this.count) * 0.5) * 20 +
          Math.sin((iy + this.count) * 0.5) * 20;
        this.particle.scale.x = this.particle.scale.y =
          (Math.sin((ix + this.count) * 0.3) + 2) * 4 +
          (Math.sin((iy + this.count) * 0.5) + 1) * 4;
      }
    }
    this.renderer.render(this.scene, this.camera);
    // This increases or decreases speed
    this.count += 0.07;
  }
  onDocumentMouseMove(event) {
    this.mouseX = event.clientX - this.windowHalfX;
    //  console.log(event.clientY - this.windowHalfY);
    if (event.clientY > 382) {
      return;
    }
    this.mouseY = event.clientY - this.windowHalfY;
    //  console.log(this.mouseY);
  }
  onDocumentTouchStart(event) {
    if (event.touches.length === 1) {
      event.preventDefault();
      this.mouseX = event.touches[0].pageX - this.windowHalfX;
      this.mouseY = event.touches[0].pageY - this.windowHalfY;
    }
  }
  onDocumentTouchMove(event) {
    if (event.touches.length === 1) {
      event.preventDefault();
      this.mouseX = event.touches[0].pageX - this.windowHalfX;
      this.mouseY = event.touches[0].pageY - this.windowHalfY;
    }
  }
  onWindowResize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
