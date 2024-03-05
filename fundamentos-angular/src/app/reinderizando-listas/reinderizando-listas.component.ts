import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-reinderizando-listas',
  templateUrl: './reinderizando-listas.component.html',
  styleUrls: ['./reinderizando-listas.component.css']
})


export class ReinderizandoListasComponent {

  celulares: Celular[] = [
    {id: 1, nome: "Celular XL", descricao: "Um celular grande", esgotado: false},
    {id: 2, nome: "Celular normal", esgotado: false},
    {id: 3, nome: "Celular pequeno", descricao: "Um celular pequeno", esgotado: true}
  ]
}
