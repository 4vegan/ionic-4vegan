import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { ListaPage } from '../lista/lista';
import { TabsPage } from '../tabs/tabs';
// import { CadastroPage } from '../cadastro/cadastro';
// import { InstrucaoCadastroPage } from '../instrucao-cadastro/instrucao-cadastro';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  buscar(){
    this.navCtrl.push(TabsPage);
    
  }

  cadastrar(){
    this.navCtrl.push(LoginPage);

  }


}
