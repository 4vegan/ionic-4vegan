import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FavoritosPage } from '../pages/favoritos/favoritos';
import { ContactPage } from '../pages/contact/contact';
import { ListaPage } from '../pages/lista/lista';
import { TabsPage } from '../pages/tabs/tabs';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { InicioPage } from '../pages/inicio/inicio';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { InstrucaoCadastroPage } from '../pages/instrucao-cadastro/instrucao-cadastro';
import { FiltroPage } from '../pages/filtro/filtro';
import { EstabCadastradoPage } from '../pages/estab-cadastrado/estab-cadastrado';
import { DetalheEstabCadastradoPage } from '../pages/detalhe-estab-cadastrado/detalhe-estab-cadastrado';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FavoritosPage,
    ContactPage,
    ListaPage,
    TabsPage, 
    DetalhesPage,
    InicioPage,
    CadastroPage,
    InstrucaoCadastroPage,
    FiltroPage,
    EstabCadastradoPage,
    DetalheEstabCadastradoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritosPage,
    ContactPage,
    ListaPage,
    TabsPage,
    DetalhesPage,
    InicioPage,
    CadastroPage,
    InstrucaoCadastroPage,
    FiltroPage,
    EstabCadastradoPage,
    DetalheEstabCadastradoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
