import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['./password-manager.component.scss'],
})
export class PasswordManagerComponent {

  // get system.clock time and update every 1 second //

  today: number = Date.now();
  constructor() {
    setInterval(() => { this.today = Date.now() }, 1);
  }

  // menu interpolation URL and title handling //

  public appPages = [
    {
      title: 'Home',
      url: '/password-manager'
    },
    {
      title: 'Password Generator',
      url: '/password-generator/generator'
    },
    {
      title: 'Options',
      url: '/password-generator/options'
    },
    {
      title: 'Back to Projects',
      url: '/projects'
    }
  ]
}
