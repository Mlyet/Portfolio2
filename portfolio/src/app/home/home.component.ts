import { AfterViewInit, Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'po-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  // @Output() logoClicked = new EventEmitter<void>();

  /* Set width of all animated text to match container */
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const parent = this.el.nativeElement;
    const child = parent.children[0];

    parent.style.width = child.clientWidth + "px";
  }
}
