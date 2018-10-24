import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(tema: string, link: any) {

    this._ajustes.aplicarTema(tema);
    this._ajustes.aplicarCheck(link);

  }

  colocarCheck() {

    // tslint:disable-next-line:prefer-const
    let selectores: any = document.getElementsByClassName('selector');
    // tslint:disable-next-line:prefer-const
    for (let ref of selectores) {
      if ( ref.getAttribute('data-theme') === this._ajustes.ajustes.tema ) {
        ref.classList.add('working');
        break;
      }
  }
  }
}
