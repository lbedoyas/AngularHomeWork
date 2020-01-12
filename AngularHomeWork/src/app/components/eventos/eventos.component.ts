import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  changeAlgo = 'algo';

  imagen: string = '../../../assets/img/1.png';

  constructor() { }

  ngOnInit() {
  }

  ingresar(evento) {
    console.log(evento);
    if (evento.key === 'Enter') {
      console.log('presionaste la tecla ' + evento.key);
    }
  }

  escribirModelo() {
    console.log(this.changeAlgo);
  }

  escribir(evento) {
    console.log(evento.target.value);
  }

  colorearFondo(evento) {
    console.log(evento);
    evento.srcElement.style.border = 'red solid';
    evento.srcElement.style.width = '400px';

  }

  cambiarTamano(evento) {
    evento.srcElement.style.width = '700px';
  }




}
