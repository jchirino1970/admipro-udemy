import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: String = 'Leyenda';
  // tslint:disable-next-line: no-inferrable-types
  @Input() progreso: number = 50;

  // tslint:disable-next-line: no-output-rename
  @Output('actualizaValor')  cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  ngOnInit() {}

  onChanges( newValue: number ) {
    console.log( newValue);
  }

  cambiarValor(valor: number) {
    if (this.progreso > 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 100 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );
  }


}


