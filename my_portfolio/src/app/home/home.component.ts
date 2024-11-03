import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {


  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const parent = this.el.nativeElement;
    const child = parent.children[0];

    parent.style.width = child.clientWidth + "px";
  }
}

