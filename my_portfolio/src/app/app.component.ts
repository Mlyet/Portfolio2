import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CursorComponent } from './cursor/cursor.component';
import { LangageToolsComponent } from './langage-tools/langage-tools.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    AboutMeComponent,
    CursorComponent,
    LangageToolsComponent,
    MyProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
