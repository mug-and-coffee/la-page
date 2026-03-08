import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  imports: [MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  showMorePeople = false;
  showMoreForMe = false;
  showPersonality = false;

  openMorePeople() {
    this.showMorePeople = !this.showMorePeople;
  }

  openMoreForMe() {
    return this.showMoreForMe = !this.showMoreForMe;
  }

  openPersonality() {
    return this.showPersonality = !this.showPersonality;
  }
}
