import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth} from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';

@Injectable()
export class EstabelecimentosProvider {

  user: Observable<firebase.User>;

  // private PATH = 'estabelecimentos/';

  constructor(private auth: AngularFireAuth) {
    this.user = auth.authState;
  }

  createAccount(user: User) {

    return this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: User) {
    return this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signOut() {
    return this.auth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.auth.auth.sendPasswordResetEmail(email);
  }




  // // pega todos os estabelecimentos cadastrados  
  // getAll() {
  //   return this.db.list(this.PATH)
  //     .snapshotChanges()
  //     .map(changes => {
  //       return changes.map(e => ({ key: e.payload.key, ...e.payload.val() }));
  //     })

  // }

  // get(key: string) {
  //   return this.db.object(this.PATH + key)
  //     .snapshotChanges()
  //     .map(e => {
  //       return { key: e.key, ...e.payload.val()};
  //     })

  // }

  // save(estabelecimento: any) {
  //   return new Promise((resolve, reject) => {
  //     if (estabelecimento.key) { 
  //       this.db.list(this.PATH)
  //         .update(estabelecimento.key, {
  //           nome: estabelecimento.nome, 
  //           telefone: estabelecimento.telefone,
  //           cnpj: estabelecimento.cnpj,
  //           tipo_estab: estabelecimento.tipo_estab,
  //           tipo_veg: estabelecimento.tipo_veg,
  //           cep: estabelecimento.cep,
  //           endereco: estabelecimento.endereco,
  //           numero: estabelecimento.numero,
  //           horario_atendimento: estabelecimento.horario_atendimento,
  //           descricao: estabelecimento.descricao,
  //           facebook: estabelecimento.facebook,
  //           site: estabelecimento.site,
  //           senha: estabelecimento.senha
  //         })
  //         .then(() => resolve())
  //         .catch((error) => reject(error));

  //     } else { 
  //       this.db.list(this.PATH)
        
  //         .push({ nome: estabelecimento.nome, 
  //           telefone: estabelecimento.telefone,
  //           cnpj: estabelecimento.cnpj,
  //           tipo_estab: estabelecimento.tipo_estab,
  //           tipo_veg: estabelecimento.tipo_veg,
  //           cep: estabelecimento.cep,
  //           endereco: estabelecimento.endereco,
  //           numero: estabelecimento.numero,
  //           horario_atendimento: estabelecimento.horario_atendimento,
  //           descricao: estabelecimento.descricao,
  //           facebook: estabelecimento.facebook,
  //           site: estabelecimento.site,
  //           email: estabelecimento.email,
  //           senha: estabelecimento.senha}) 
  //         .then(() => resolve());
  //     } 
  //   });

  // }

  // remove(key: string) {
  //   return this.db.list(this.PATH).remove(key);
  // }

}
