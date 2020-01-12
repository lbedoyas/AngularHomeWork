import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../Models/articulo/articulo';
import { Router } from '@angular/router';



@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

articulos: Array<Articulo> = new Array<Articulo>();

  constructor(private ruta: Router) { }

  ngOnInit() {
    this.articulos.push(
      {nombre: 'TV 32 LG',
      descripcion: 'LG',
      stock: 4,
      precio: 899000,
      precioMayorista: 700000}
    );
  }

  pasarParametro(articuloRecibido: Articulo) {
    console.log(articuloRecibido);
    this.ruta.navigate(['articuloDetalle', {articulo: JSON.stringify(articuloRecibido) }]);
  }


}
