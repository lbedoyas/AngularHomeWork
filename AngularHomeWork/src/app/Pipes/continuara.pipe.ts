import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(valor: string): string {
    if (valor.toString().length > 100) {
      valor = valor.substring(0, 10);
    }
    return valor;
  }

}
