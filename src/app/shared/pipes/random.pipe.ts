import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random',
  pure: false,
  standalone: true
})
export class RandomPipe implements PipeTransform {

  transform(value: any): number {
    console.log('O Random pipe foi chamado!');
    return Math.random();
  }
}
