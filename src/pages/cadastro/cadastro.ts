import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstabCadastradoPage } from '../estab-cadastrado/estab-cadastrado';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrar(){
    this.navCtrl.push(EstabCadastradoPage);

  }

}
