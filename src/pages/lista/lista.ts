import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {
 

  constructor(public navCtrl: NavController) {

  }

  seleciona(estabelecimento){
    // console.log(estabelecimento.nome)
     this.navCtrl.push(DetalhesPage, {estabelecimentoSelecionado: estabelecimento});
}

}
