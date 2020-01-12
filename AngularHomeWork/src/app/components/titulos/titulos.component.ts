import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  persona: any = {
    nombre: 'Luis',
    apellido: 'Bedoya'
  };

  imagen: string = '../../../assets/img/1.png';
  inputNuevo: string = 'soy un input nuevo';

  constructor() { }

  ngOnInit() {
  }

}
