import { Directive, Input, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[classChanger]'
})
export class ClassChangerDirective {
  @Input() tclass: string;
  @Input() isActive: boolean;
  @HostListener('click') onClick() {
    this.toggleClass();
  }
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  toggleClass() {
    if (!this.isActive) {
      this.renderer.addClass(this.element.nativeElement, this.tclass);
      this.isActive = true;
    } else {
      this.renderer.removeClass(this.element.nativeElement, this.tclass);
      this.isActive = false;
    }
  }

}
