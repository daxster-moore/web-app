import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  today: number = Date.now();
  constructor() {
    setInterval(() => { this.today = Date.now() }, 1);
  }

  toggle(ev) {
    document.body.classList.toggle('dark', ev.detail.checked);
  }

  public applications = [
    {
      title: 'Notepad Application',
      text: 'This notepad application takes in the basic applications of using a notepad -- note-taking, saving notes, and showing more details (as adding the notes only displays the title)',
      url: '/notepad',
      icon: 'journal-outline'
    },
    {
      title: 'Password Manager',
      text: 'This application saves and stores passwords, with options and a password generator.',
      url: '/password-manager',
      icon: 'key-sharp'
    },
  ]
}
