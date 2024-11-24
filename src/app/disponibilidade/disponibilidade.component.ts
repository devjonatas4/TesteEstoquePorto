import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { BancoDadosComponent } from '../banco-dados/banco-dados.component';

@Component({
  selector: 'app-disponibilidade',
  standalone: false,
  templateUrl: './disponibilidade.component.html',
  styleUrl: './disponibilidade.component.scss'
})
export class DisponibilidadeComponent {

  constructor(
    private BancoDados: BancoDadosComponent
  ){}
  
    form = new FormGroup({
      nome: new FormControl(),
      tarja: new FormControl(),
      quantidade: new FormControl(),
      });
      
  onSubmit(){
    let medicamento = {nome:this.form.value.nome,
                      tarja: this.form.value.tarja,
                      quantidade: this.form.value.quantidade,
    }
  this.BancoDados.inserirMedicamento(medicamento);
    this.form.reset();
  }
  

}
