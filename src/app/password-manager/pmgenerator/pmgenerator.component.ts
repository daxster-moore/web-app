import { Component } from '@angular/core';
import { generate } from 'generate-password-browser'
import { ClipboardService } from 'ngx-clipboard'

export class Preview {
  
}

@Component({
  selector: 'app-pmgenerator',
  templateUrl: './pmgenerator.component.html',
  styleUrls: ['./pmgenerator.component.scss'],
})
export class PMGeneratorComponent {

  // get system.clock time and update every 1 second //

  today: number = Date.now();
  constructor(private _clipboardService: ClipboardService) {
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

  data: Array<Preview> = []
  password: string

  // password options //

  public form = [
    {val: 'Add Numbers (0-9)', isChecked: false},
    {val: 'Add Uppercase (A-Z)', isChecked: false}, 
    {val: 'Add Special Characters (@, $, +, }, etc.)', isChecked: false},  
  ]

  // everytime the ion-range moves, the password generation gets updated //

  onChange(ev: any) {
    this.password = generate({
      length: ev.detail.value,
      numbers: this.form[0].isChecked,
      uppercase: this.form[1].isChecked,
      symbols: this.form[2].isChecked
    })
    
    this.data.push(this.password)
    console.log(this.password)
  }

  // button to copy //

  copyClipboard() {
    this._clipboardService.copy(this.password)
  }
}
