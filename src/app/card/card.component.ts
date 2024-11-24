import { Component, Input} from '@angular/core';
import { Medicamento } from '../models/medicamento';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 @Input() medicamento:Medicamento|null =null;

  isMedicamentoT(){
    if(this.medicamento?.quantidade == 1){
      return false;
    } else {
      return true;
    }
  }

  onClick() {​
    alert('botão clicado!');​
  }
}


