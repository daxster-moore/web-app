import { Component } from '@angular/core';

export class Preview {
  title: string
  text: string
  isShowText: boolean
}

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss'],
})
export class NotepadComponent {

  toggle(ev) {
    document.body.classList.toggle('dark', ev.detail.checked);
  }

  // ngIf boolean for when moreInfo() button is clicked //

  isShowText = true

  // Real-time clock in ion-header //

  today: number = Date.now();
  constructor() {
  setInterval(() => {this.today = Date.now()}, 1);
  }

  // Notepad title and text data handling + display //

  data: Array<Preview> = []
  title: string
  text: string

  onSubmit() {

  }

  addNote() {
    const display = new Preview()
    display.title = this.title
    display.text = this.text
    this.data.push(display)
  }

  // When the moreInfo button is clicked, moreInfo() gets called. //
  // item.isShowText turns to true, indicating the text is to be displayed //

  moreInfo(item: Preview) {
    item.isShowText = !item.isShowText
  }

  delNote() {
    this.data.pop()
  }
}
