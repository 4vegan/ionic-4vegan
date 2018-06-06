import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstabCadastradoPage } from '../estab-cadastrado/estab-cadastrado';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  entrar() {
    this.navCtrl.push(EstabCadastradoPage);
  }

}
