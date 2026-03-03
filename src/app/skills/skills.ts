import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  imports: [MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  showMorePeople = false;

  openMorePeople() {
    this.showMorePeople = !this.showMorePeople;
  }
}
