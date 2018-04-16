import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
// import { EstabCadastradoPage } from '../estab-cadastrado/estab-cadastrado';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-instrucao-cadastro',
  templateUrl: 'instrucao-cadastro.html',
})
export class InstrucaoCadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cadastrar() {
    this.navCtrl.push(CadastroPage);
  }

  jaCadastrado() {
    this.navCtrl.push(LoginPage);
  }
}
