import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
declare var THREE;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('container') elementRef: ElementRef;
  faSearch = faSearch;
  faChevronRight = faChevronRight;
  SEPARATION = 40;
  AMOUNTX = 35;
  AMOUNTY = 35;
  particles = [];
  particle;
  count = 0;

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  container: HTMLElement;
  camera;
  scene = THREE.Scene;
  renderer;
  req: any;
  constructor() {}

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.init();
    this.animate();
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.req);
  }

  init() {
    this.container = this.elementRef.nativeElement;
   // document.body.appendChild(this.container);
    if (this.container) {
      this.container.className += this.container.className ? ' waves' : 'waves';
    }
    this.camera = new THREE.PerspectiveCamera(
      120, // 120
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    this.camera.position.y = 100;
    this.camera.position.z = 50; // 300
     this.camera.rotation.x = 0.25; // 0.35
   this.scene = new THREE.Scene();
    this.particles = new Array();
    const PI2 = Math.PI * 2;
    const material = new THREE.SpriteCanvasMaterial({
      color: 0xffffff,
      program: function(context) {
        context.beginPath();
        context.arc(0, 0, 0.1, 0, PI2, true);
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
          iy * this.SEPARATION - (this.AMOUNTY * this.SEPARATION - 10);
        this.scene.add(this.particle);
      }
    }
    this.renderer = new THREE.CanvasRenderer({alpha: true });
   // this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
   // this.renderer.setClearColor(0xfffff0, 1);
    this.container.appendChild(this.renderer.domElement);
   // window.addEventListener('resize', this.onWindowResize, false);
  }
  onWindowResize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  animate() {
   this.req =  requestAnimationFrame(this.animate.bind(this));


      this.render();
  }
  render() {
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
    this.count += 0.05;
  }
}
