import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]',
  standalone: true,
})
export class BackgroundImageDirective {
  @Input('appBackgroundImage') imageUrl: string = '';

  private imagesPath = '../../assets/images/';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-image',
      `url(${this.imagesPath + this.imageUrl})`
    );
  }
}
