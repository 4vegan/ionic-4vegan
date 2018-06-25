import { Component, ViewChild } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { User } from '../../providers/estabelecimentos/user';
import { NgForm } from '@angular/forms';
import { EstabelecimentosProvider } from '../../providers/estabelecimentos/estabelecimentos';
import { EstabCadastradoPage } from '../estab-cadastrado/estab-cadastrado';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User = new User();

  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController, 
    private toastCtrl: ToastController,
    private auth: EstabelecimentosProvider) {
  }

  createAccount() {
    if(this.form.form.valid) {
      let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});

      this.auth.createAccount(this.user)
        .then((user: any) => {
          //dispara email de verificação de conta
          // user.sendEmailVerification();

          toast.setMessage('Estabelecimento cadastrado com sucesso.');
          toast.present();

          this.navCtrl.setRoot(EstabCadastradoPage);
        })
        .catch((error: any) => {
          if(error.code == 'auth/email-already-in-use') {
            toast.setMessage('O e-mail digitado já está em uso.');
          } else if(error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if(error.code == 'auth/operation-not-allowed') {
            toast.setMessage('Não está habilitado criar usuários.');
          } else if(error.code == 'auth/weak-password') {
            toast.setMessage('A senha digitada é muito fraca.');
          }
          toast.present();
        });
    }
  }

}
