import { Component } from '@angular/core';

export class Preview {
  charValue: number
}

@Component({
  selector: 'app-pmgenerator',
  templateUrl: './pmgenerator.component.html',
  styleUrls: ['./pmgenerator.component.scss'],
})
export class PMGeneratorComponent {

  // get system.clock time and update every 1 second //

  today: number = Date.now();
  constructor() {
    setInterval(() => { this.today = Date.now() }, 1);
  }

  // menu interpolation URL and title handling //

  public appPages = [
    {
      title: 'Passwords',
      url: '/password-manager'
    },
    {
      title: 'Password Generator',
      url: '/password-manager/generator'
    },
    {
      title: 'Options',
      url: '/password-manager/options'
    },
    {
      title: 'Back to Projects',
      url: '/projects'
    }
  ]

  data: Array<Preview> = []
  inputtedNumber: number

  randPass() {
    const display = new Preview()
    let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-=_+{}[];:',./<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""
    for (let i = 0; i < length; i++) {
      let x = Math.floor(Math.random() * chars.length)
      pass += chars.charAt(x)
    }
    return pass;
  }
}
