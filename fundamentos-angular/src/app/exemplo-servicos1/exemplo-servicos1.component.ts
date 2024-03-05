import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component  {

  nome="";

  constructor(private logger: LoggerService, private exibir:LoggerService ){
  }

  adicionarNome(){
    this.logger.logar(`O nome foi ${this.nome} adicionado!`)
  }
}
