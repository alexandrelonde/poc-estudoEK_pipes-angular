import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triple',
  standalone: true
})
export class TriplePipe implements PipeTransform {

  transform(value: number): number {
    console.log('O pipe triple foi chamado com o valor:', value)
    return value * 3;
  }

}
