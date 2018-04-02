import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalheEstabCadastradoPage } from '../detalhe-estab-cadastrado/detalhe-estab-cadastrado';

@Component({
  selector: 'page-estab-cadastrado',
  templateUrl: 'estab-cadastrado.html',
})
export class EstabCadastradoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  detalhe(){
    this.navCtrl.push(DetalheEstabCadastradoPage);

  }


}
