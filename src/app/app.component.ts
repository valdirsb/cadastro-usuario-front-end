import { Component } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './IUsers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApiRequest';
  usuario = {
    nome: '',
    email: '',
    telefone: '',
  };

  constructor(private userService: UserService)
  {}

  obterTodosUsers(){
    this.userService.obterTodos()
      .then(users => console.log(users))
      .catch(error => console.error(error));
      
  }

  obterSomenteUm(id: String){
    this.userService.obterPorId(id).subscribe(dados => this.usuario=dados)
  }

  adicionarUser(){

    if (this.verificarCampos()) {
      const user: IUser = this.usuario;
  
      this.userService.adicionar(user)
        .then(user => {
          console.log('🟢 Adicionado');
          alert('Usuário cadastrado com sucesso!')
          this.usuario.nome='';
          this.usuario.email='';
          this.usuario.telefone='';
        })
        .catch(error => console.error(error));
    }else{
      alert('Os Campos devem ser preechidos.');
    }
  }

  verificarCampos(){
    if (this.usuario.nome==''||this.usuario.email==''||this.usuario.telefone=='') {
      return false;
    }else{
      return true;
    }
  }

  atualizar(){
    const user: IUser = {
      id:"8",
      nome: "ssasa",
      email: "aabc@gmail.com",
      telefone: "123456"
    };

    this.userService.atualizar(user)
      .then(user => console.log('🔵 Att', user))
      .catch(error => console.error(error));
  }

  remover(){
    this.userService.delete(7)
      .then(res => console.log('🔴 Removido', res))
      .catch(error => console.error(error));
  }


}
