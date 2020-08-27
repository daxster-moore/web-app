import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toggle(ev) {
    document.body.classList.toggle('dark', ev.detail.checked);
  }

  today: number = Date.now();
  constructor() {
  setInterval(() => {this.today = Date.now()}, 1);
  }
}

