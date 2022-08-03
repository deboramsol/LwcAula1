import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
//Criar variáveis, atributos.

nome = 'Débora Sol';
telefone = '31 99999999';
cpf = '12345678901';
idade = 35;
email = 'demonfsol@soulcode.com';
instagram ='https://www.instagram.com/';
linkedIn ='https://www.linkedin.com/feed/';

visible = true;

// Uso de variável da classe, dentro dos nossos metódos
//Trocar valor de visible de true --> false
//Utilizamos uma variavel fora e aplicamos dentro de um metódo

trocarDiv(){
  //this.visible = false;
  /*if(this.visible ==true){
    this.visible = false;
  }
  else{
    this.visible = true;
  }
}*/
  this.visible = !this.visible;
}

alterarValores(){
this.nome = 'Harry Potter';
this.telefone = '31 454545445';
this.cpf = '12345678901';
this.idade = 36;
this.email = 'harrypotter@soulcode.com';
this.instagram ='https://www.instagram.com/';
this.linkedIn ='https://www.linkedin.com/feed/';
}

trocarPrimeiro(){
    this.nome = 'Débora Sol';
    this.telefone = '31 99999999';
    this.cpf = '12345678901';
    this.idade = 35;
    this.email = 'demonfsol@soulcode.com';
    this.instagram ='https://www.instagram.com/';
    this.linkedIn ='https://www.linkedin.com/feed/';
  }
}

/* 
Exercício em classe
*Criar um metódo chamado de alterar valores
vai mudar o valor do nome, telefone, cpf, idade, e-mail, instagram e linkedId

*No html criar um novo botão chamado 'Alterar Valor' que ative a função
 */