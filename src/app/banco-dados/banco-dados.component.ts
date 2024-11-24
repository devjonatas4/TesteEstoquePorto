import { Component, Injectable } from '@angular/core';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-banco-dados',
  standalone: false,
  
  templateUrl: './banco-dados.component.html',
  styleUrl: './banco-dados.component.scss'
})
export class BancoDadosComponent {

  constructor(){}

private medicamentos: Medicamento[] = [
{nome:"Paracetamol",
  tarja: "Vermelha",
  quantidade:10,
},
{nome:"Dipirona",
  tarja: "preta",
  quantidade:3,
},
{nome:"biovicerim",
  tarja: "Vermelha",
  quantidade:7,
},
]

public recuperarMedicamentos(): Medicamento[]{
  return this.medicamentos;
}

public inserirMedicamento(medicamento: Medicamento){
  this.medicamentos.push(medicamento);
}
}