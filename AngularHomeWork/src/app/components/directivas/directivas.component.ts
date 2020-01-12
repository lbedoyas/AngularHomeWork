import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

interface Producto {
  nombre: string;
  stock: number;
  fabricante: string;
  fechaVencimiento: Date;
}

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  imagen = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';
  cargando: boolean = true;
  nombres: Array<string> = ['luis', 'lucia', 'clara', 'gabriel'];
  pestana: string = 'Info';
  mostrarCuadrado: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

  mostrarCargando(){
    this.cargando = true;
  }


  cambiarPerstana(pestana: string) {
    this.pestana = pestana;
  }

  alternarFondo() {
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }



}
