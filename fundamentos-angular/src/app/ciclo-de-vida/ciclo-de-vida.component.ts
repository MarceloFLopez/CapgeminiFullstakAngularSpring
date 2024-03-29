import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {
  ngOnDestroy(): void {
   clearInterval(this.timer)    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes) 
  }

  horario = new Date();
  timer: any = null!;

  @Input() texto = "";

  ngOnInit(): void {
    console.log("O evento disparou!")
    this.timer = setInterval(() => this.horario = new Date(), 1000) 
  }
}
