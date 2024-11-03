import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  FaGithub = faGithub;
  FaLinkedin = faLinkedin;
   FaEnvelope = faEnvelope;
 }


