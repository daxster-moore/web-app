import { Component } from '@angular/core';


export class newAccount {
  email: string
  password: string
}

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

  toggle(ev) {
    document.body.classList.toggle('dark', ev.detail.checked);
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
      title: 'Back to Projects',
      url: '/projects'
    }
  ]

  // show password menu //

  newPassword: boolean

  addInfo() {
    this.newPassword = false
  }

  // account data handling //

  data: Array<newAccount> = []
  email: string
  password: string
  accountDetails: boolean
  sharedState: boolean

  addAccount() {
    const display = new newAccount()
    display.email = this.email
    display.password = this.password   
    if (display.password && display.password.length >= 8 && display.email && display.email.includes("@" && ".")) {
      this.data.push(display)
      this.newPassword = false
    }
    this.email = ''
    this.password = ''
  }

  // account details and a button to close account details //

  details() {
    this.accountDetails = false
  }

  closeDetails() {
    this.accountDetails = false
  }
}
