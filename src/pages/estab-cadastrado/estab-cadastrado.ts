import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalheEstabCadastradoPage } from '../detalhe-estab-cadastrado/detalhe-estab-cadastrado';
import { CadastroPage } from '../cadastro/cadastro';
import { Observable} from 'rxjs/Observable';
import { EstabelecimentosProvider } from '../../providers/estabelecimentos/estabelecimentos';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-estab-cadastrado',
  templateUrl: 'estab-cadastrado.html',
})
export class EstabCadastradoPage {

  estabelecimentos: Observable<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: EstabelecimentosProvider
  ) {

  }

  signOut() {
    this.auth.signOut()
      .then(() => {
        this.navCtrl.setRoot(LoginPage);
      })
      .catch((erro) => {
        console.error(erro);
      });
  }

  newEstabelecimento(){
    this.navCtrl.push(CadastroPage);
  }

  editEstabelecimento(estabelecimento: any) {
    this.navCtrl.push(CadastroPage, {estabelecimento: estabelecimento});

  }

  // removeEstabelecimento(key: string){
  //   this.provider.remove(key)
  //     .then(() => {
  //       this.toast.create({message: 'Estabelecimento removido com sucesso.', duration: 3000}).present();
  //     })
  //     .catch(() => {
  //       this.toast.create({message: 'Erro ao remover o estabelecimento.', duration: 3000}).present();
  //     })

  // }

  showDetalhe(){
    this.navCtrl.push(DetalheEstabCadastradoPage);

  }

  // cadastrarMais(){
  //   this.navCtrl.push(CadastroPage);

  // }


}
