import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/Models/articulo/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  nombre: string;
  precio: number;
  articulo: Articulo;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    // this.nombre = this.ruta.snapshot.params.nombre;
    // this.precio = this.ruta.snapshot.params.precio;
    this.articulo = JSON.parse(this.rutaActiva.snapshot.params.articulo);
    console.log(this.rutaActiva.snapshot.params.articulo);
  }

}
