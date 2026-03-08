import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Skills } from './skills/skills';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Start } from './start/start';
import { Learning } from './learning/learning';
import { TechSkills } from './tech-skills/tech-skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Skills, MatIconModule, Start, Learning, TechSkills],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('la-page');

  startVisible: boolean = true;
  skillsVisible: boolean = false;
  vitaVisible: boolean = false;
  techSkillVisible: boolean = false;

  homeButtonCSS: string = 'main-button-actual';
  skillsButtonCSS: string = 'main-button';
  vitaButtonCSS: string = 'main-button';
  techSkillButtonCSS: string = 'main-button';

  onSkills() {
    this.startVisible = false;
    this.skillsVisible = true;
    this.vitaVisible = false;
    this.techSkillVisible = false;
    this.skillsButtonCSS = 'main-button-actual';
    this.homeButtonCSS = 'main-button';
    this.vitaButtonCSS = 'main-button';
    this.techSkillButtonCSS = 'main-button';
  }

  onStart() {
    this.startVisible = true;
    this.skillsVisible = false;
    this.vitaVisible = false;
    this.techSkillVisible = false;
    this.skillsButtonCSS = 'main-button';
    this.vitaButtonCSS = 'main-button';
    this.homeButtonCSS = 'main-button-actual';
    this.techSkillButtonCSS = 'main-buttonl';
  }

  onVita() {
    this.startVisible = false;
    this.skillsVisible = false;
    this.vitaVisible = true;
    this.techSkillVisible = false;
    this.skillsButtonCSS = 'main-button';
    this.vitaButtonCSS = 'main-button-actual';
    this.homeButtonCSS = 'main-button';
    this.techSkillButtonCSS = 'main-button';
  }

  onTechSkill() {
    this.startVisible = false;
    this.skillsVisible = false;
    this.vitaVisible = false;
    this.techSkillVisible = true;
    this.skillsButtonCSS = 'main-button';
    this.vitaButtonCSS = 'main-button';
    this.homeButtonCSS = 'main-button';
    this.techSkillButtonCSS = 'main-button-actual';
  }
}
