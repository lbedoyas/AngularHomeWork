import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  titulo: string = 'soy un titulo';
  dinero: number = 2400;
  ganancias: number = 0.54;
  nacimiento: Date = new Date('08/25/1986');
  // tslint:disable-next-line: max-line-length
  textoLargo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aspernatur  distinctio libero asperiores excepturi, laboriosam consectetur tempore fugiat';

  constructor() { }

  ngOnInit() {
  }

}
