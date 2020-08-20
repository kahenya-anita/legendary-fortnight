import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.background("rgb(247, 84, 111")
    this.text("white")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.background("white")
    this.text("black")
  }

  private background(action:string){ 
    this.elem.nativeElement.style.backgroundColor=action;
  }
  private text(action:string){ 
    this.elem.nativeElement.style.color=action;
  }
}
