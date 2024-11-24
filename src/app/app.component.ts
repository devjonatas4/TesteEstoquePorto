import { Component } from '@angular/core';
import { BancoDadosComponent } from './banco-dados/banco-dados.component';
import { Medicamento } from './models/medicamento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Estoque';


  constructor(
    private BancoDados: BancoDadosComponent

  ){}

  getMedicamentos():Medicamento[]{
    return this.BancoDados.recuperarMedicamentos();
  }

}



