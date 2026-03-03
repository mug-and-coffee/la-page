import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Skills } from './skills/skills';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Skills, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('la-page');

  skillsVisible: boolean = false;

  onSkills() {
    this.skillsVisible = true;
  }
}
