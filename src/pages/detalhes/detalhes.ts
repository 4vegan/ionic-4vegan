import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  public estabelecimento; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estabelecimento = this.navParams.get('estabelecimentoSelecionado');
  }


}
