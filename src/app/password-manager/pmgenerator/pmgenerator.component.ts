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
  password: string

  public form = [
    {val: 'Add Numbers (0-9)', isChecked: false},
    {val: 'Add Uppercase (A-Z)', isChecked: false}, 
    {val: 'Add Special Characters (@, $, +, }, etc.)', isChecked: false},  
  ]


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

  copyClipboard() {
    this._clipboardService.copy(this.password)
  }
}
