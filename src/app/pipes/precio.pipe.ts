import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(value: number | string): string {
    const precioNumerico = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(precioNumerico)) {
      return 'Invalid Price';
    }
    return `$${precioNumerico.toFixed(2)}`;
  }

}
