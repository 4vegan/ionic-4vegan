import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class EstabelecimentosProvider {

  private PATH = 'estabelecimentos/';

  constructor(private db: AngularFireDatabase) {
   
  }

  //pega todos os estabelecimentos cadastrados  
  getAll() {
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(e => ({ key: e.payload.key, ...e.payload.val() }));
      })

  }

  get(key: string) {
    return this.db.object(this.PATH + key)
      .snapshotChanges()
      .map(e => {
        return { key: e.key, ...e.payload.val()};
      })

  }

  save(estabelecimento: any) {
    return new Promise((resolve, reject) => {
      if (estabelecimento.key) { //metodo para salvar alterações do estabelecimento
        this.db.list(this.PATH)
          .update(estabelecimento.key, {
            nome: estabelecimento.nome, 
            telefone: estabelecimento.telefone,
            cnpj: estabelecimento.cnpj,
            tipo_estab: estabelecimento.tipo_estab,
            tipo_veg: estabelecimento.tipo_veg,
            cep: estabelecimento.cep,
            endereco: estabelecimento.endereco,
            numero: estabelecimento.numero,
            horario_atendimento: estabelecimento.horario_atendimento,
            descricao: estabelecimento.descricao,
            facebook: estabelecimento.facebook,
            site: estabelecimento.site,
            senha: estabelecimento.senha
          })//aqui devo inserir todos os campos, menos email. pode inserir um botão para alteração de senha
          .then(() => resolve())
          .catch((error) => reject(error));

      } else { //metodo para criar um estabelecimento
        this.db.list(this.PATH)
        
          .push({ nome: estabelecimento.nome, 
            telefone: estabelecimento.telefone,
            cnpj: estabelecimento.cnpj,
            tipo_estab: estabelecimento.tipo_estab,
            tipo_veg: estabelecimento.tipo_veg,
            cep: estabelecimento.cep,
            endereco: estabelecimento.endereco,
            numero: estabelecimento.numero,
            horario_atendimento: estabelecimento.horario_atendimento,
            descricao: estabelecimento.descricao,
            facebook: estabelecimento.facebook,
            site: estabelecimento.site,
            email: estabelecimento.email,
            senha: estabelecimento.senha}) //aqui devo inserir todos os campos
          .then(() => resolve());
      } 
    });

  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

  //fazer metodo pra upload de fotos e exclusão ou alteração

}
