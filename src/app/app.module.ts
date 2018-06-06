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
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EstabelecimentosProvider } from '../providers/estabelecimentos/estabelecimentos';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
// import firebase from 'firebase/app';

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
    DetalheEstabCadastradoPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBLSz3Wk_B1N5FBCq4UH-EB5sdMNCXYpWY",
      authDomain: "ionic-4vegan.firebaseapp.com",
      databaseURL: "https://ionic-4vegan.firebaseio.com",
      projectId: "ionic-4vegan",
      storageBucket: "ionic-4vegan.appspot.com",
      messagingSenderId: "19037299830"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
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
    DetalheEstabCadastradoPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EstabelecimentosProvider,
    AuthProvider
  ]
})
export class AppModule {}
