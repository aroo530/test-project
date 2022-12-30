import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  @Input('defaultColor') defaultColor: string = 'royalblue';
  @Input('highlightColor') highlightColor: string = 'aliceblue';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      this.defaultColor
    );
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      this.highlightColor
    );
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      this.defaultColor
    );
  }
  @HostBinding('style.font-size') fontsize: string = '20px';
}
