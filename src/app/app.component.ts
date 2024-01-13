import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'poc-estudoEK_pipes-angular';
  dataAtual: Date = new Date();
  quantia: number = 200;
  programa = {nome: 'Angular', versao: '15' };
  texto = 'aqui está o texto para o teste do pipe personalizado.';
  numero: number = 3;

  //Pipe impuro filter
  items = ['maçã', 'banana', 'pera', 'laranja', 'abacaxi', 'limão'];
  searchTerm: string = '';
}
