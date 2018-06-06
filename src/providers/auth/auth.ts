import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthProvider {

  constructor(private angularFireAuth: AngularFireAuth) {
    
  }

  //essas opções são para o usuario estabelecimento
  criarUsuario(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }

  singIn(user: User) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.senha);
  }

  singOutFirebase(){
    return  this.angularFireAuth.auth.signOut();
  }

  resetSenha(email: string){
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  //criar opções para gmail e facebook para o usuario logar

}
