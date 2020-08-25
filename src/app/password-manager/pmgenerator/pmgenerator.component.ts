import { Component } from '@angular/core';
import { generate } from 'generate-password-browser'

export class Preview {
  display: any
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

  onChange(ev: any) {
    let password = generate({
      length: ev.detail.value,
      numbers: true,
      uppercase: true,
      symbols: true
    })
    console.log(password)
  }
}
