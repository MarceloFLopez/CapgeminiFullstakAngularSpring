import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {

  nome = "Marcelo";
  dataNascimento = "1995-01-01  00:15:54";
  urlImagem = "/assets/joao.png";

  mostrarDataNascimento(){
    alert(`A data de nascimento do Joõa é: ${this.dataNascimento}`)
  }
}
