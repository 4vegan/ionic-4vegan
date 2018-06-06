import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstabCadastradoPage } from '../estab-cadastrado/estab-cadastrado';
import { EstabelecimentosProvider } from '../../providers/estabelecimentos/estabelecimentos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  title: string;
  form: FormGroup;
  estabelecimento: any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private provider: EstabelecimentosProvider,
    private toast: ToastController) {
      //aqui recebe o estabelecimento e cria o formulario. 
      this.estabelecimento = this.navParams.data.estabelecimento || {};
      this.createForm();
      //metodo para trocar o titulo do formulario para alteração ou novo cadastro
      this.setUpTitle();
  }

  private setUpTitle(){ //aqui é uma validação do app, se for primeiro cadastro ou alteração
    this.title = this.navParams.data.estabelecimento ? 'Alterando cadastro' : 'Cadastrar';
  }

  createForm(){  //aqui esta inserido todos os campos para cadastro via formBuilder.
    this.form = this.formBuilder.group({
      key: [this.estabelecimento.key],
      nome: [this.estabelecimento.nome, Validators.required],
      cnpj: [this.estabelecimento.cnpj, Validators.required],
      telefone : [this.estabelecimento.telefone, Validators.required],
      tipo_estab: [this.estabelecimento.tipo_estab, Validators.required],
      tipo_veg: [this.estabelecimento.tipo_veg, Validators.required],
      cep: [this.estabelecimento.cep, Validators.required],
      endereco: [this.estabelecimento.endereco, Validators.required],
      numero: [this.estabelecimento.numero, Validators.required],
      horario_atendimento: [this.estabelecimento.horario_atendimento, Validators.required],
      descricao: [this.estabelecimento.descricao, Validators.required],
      facebook: [this.estabelecimento.facebook, Validators.required],
      site: [this.estabelecimento.site, Validators.required],
      email: [this.estabelecimento.email, Validators.required],
      senha: [this.estabelecimento.senha, Validators.required],
      // uploadFoto: [this.estabelecimento.uploadFoto, Validators.required]
     
    })
  }

  onSubmit(){ //aqui valida de todos os campos do form estão preenchidos, se sim efetua o cadastro e direciona para a pagina da lista de cadastro.
    if(this.form.valid){
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({message: 'Cadastro salvo com sucesso.', duration:3000}).present();
          this.navCtrl.push(EstabCadastradoPage);
        })
        .catch((error) => {
          this.toast.create({message: 'Erro ao salvar o cadastro', duration: 3000}).present();
          console.error(error);
        });
    }
  }

  //fazer metodo para upload de foto

}
