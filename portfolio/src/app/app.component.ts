import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursorComponent } from './cursor/cursor.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LangagesToolsComponent } from './langages-tools/langages-tools.component';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  imports: [
    RouterModule, 
    HomeComponent, 
    CursorComponent, 
    AboutMeComponent, 
    LangagesToolsComponent,
    MyProjectsComponent,
    FooterComponent
  ],
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
