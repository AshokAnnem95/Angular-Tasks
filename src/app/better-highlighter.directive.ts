import { Directive,ElementRef,Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {

  constructor(private eleRef : ElementRef,private renderer : Renderer2) { }

  ngOnInit(){

  }
  @HostListener('mouseenter') mouseover(eventData : Event)
  {
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue')
  }
  @HostListener('mouseleave') mouseleave(eventData : Event)
  {
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','green')
  }

}
