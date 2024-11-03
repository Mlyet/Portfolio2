import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss'
})
export class CursorComponent implements OnInit {
  dotStyle: any = {};
  outlineStyle: any = {};

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const posX = event.clientX;
    const posY = event.clientY;

    this.dotStyle = {
      left: `${posX}px`,
      top: `${posY}px`
    };

    this.outlineStyle = {
      left: `${posX}px`,
      top: `${posY}px`
    };

    const dot = this.el.nativeElement.querySelector("[data-cursor-dot]");
    const outline = this.el.nativeElement.querySelector("[data-cursor-outline]");

    this.renderer.setStyle(dot, 'left', `${posX}px`);
    this.renderer.setStyle(dot, 'top', `${posY}px`);

    this.renderer.setStyle(outline, 'left', `${posX}px`);
    this.renderer.setStyle(outline, 'top', `${posY}px`);
  }
}
