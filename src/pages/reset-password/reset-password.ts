import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { EstabelecimentosProvider } from '../../providers/estabelecimentos/estabelecimentos';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  estabelecimentoEmail: string = '';
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: EstabelecimentosProvider, private toastCtrl: ToastController) {
  }

  resetPassword() {
    if(this.form.form.valid) {
      let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'})
      this.auth.resetPassword(this.estabelecimentoEmail)
        .then(() => {
          toast.setMessage('Solicitação foi enviada para o seu e-mail');
          toast.present();

          this.navCtrl.pop();
        })
        .catch((error: any) => {
          if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          }

          toast.present();
        })
    }
  }


}
