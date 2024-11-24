import { Component } from '@angular/core';
import { BancoDadosComponent } from '../banco-dados/banco-dados.component';
import { Medicamento } from '../models/medicamento';
@Component({
  selector: 'app-medicamento',
  standalone: false,
  templateUrl: './medicamento.component.html',
  styleUrl: './medicamento.component.scss'
})
export class MedicamentoComponent { 
constructor(
  private bancoDados: BancoDadosComponent
){ }

getMedicamentos(): Medicamento[]{
  return this.bancoDados.recuperarMedicamentos();
}
}
