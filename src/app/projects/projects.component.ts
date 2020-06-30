import { Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  today: number = Date.now();
  constructor() {
  setInterval(() => {this.today = Date.now()}, 1);
  }
}
