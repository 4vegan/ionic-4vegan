import { Component } from '@angular/core';

import { FavoritosPage } from '../favoritos/favoritos';
import { ContactPage } from '../contact/contact';
import { ListaPage } from '../lista/lista';
import { NavController } from 'ionic-angular';
import { FiltroPage } from '../filtro/filtro';
// import { DetalhesPage } from '../detalhes/detalhes';
// import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListaPage;
  tab2Root = FavoritosPage;
  tab3Root = ContactPage;
  tab4Root = FiltroPage;

  constructor(public navCtrl: NavController) {}

  goBack() {
    this.navCtrl.pop();
  }
}
