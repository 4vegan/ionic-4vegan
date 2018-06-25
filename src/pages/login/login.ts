import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { EstabCadastradoPage } from '../estab-cadastrado/estab-cadastrado';
import { SignupPage } from '../signup/signup';
import { User } from '../../providers/estabelecimentos/user';
import { NgForm } from '@angular/forms';
import { EstabelecimentosProvider } from '../../providers/estabelecimentos/estabelecimentos';
import { ResetPasswordPage } from '../reset-password/reset-password';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: EstabelecimentosProvider,
    private toastCtrl: ToastController) {
  }

  signIn() {
    if(this.form.form.valid) {
      this.auth.signIn(this.user)
        .then(() => {
          this.navCtrl.setRoot(EstabCadastradoPage);
        })
        .catch((error: any) => {
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
          if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code == 'auth/user-disabled') {
            toast.setMessage('O usuário está desativado.');
          } else if (error.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          } else if (error.code == 'auth/wrong-password') {
            toast.setMessage('A senha digitada não é valida.');
          }
          toast.present();
        })
    }
  }
  
  criarConta()  {
    this.navCtrl.push(SignupPage);
  }

  resetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }


}
