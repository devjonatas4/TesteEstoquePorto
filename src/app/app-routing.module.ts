import { NgModule } from '@angular/core';
import { BancoDadosComponent } from './banco-dados/banco-dados.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { DisponibilidadeComponent } from './disponibilidade/disponibilidade.component';

const routes: Routes = [
  {path: 'medicamento', component: MedicamentoComponent},
  {path: 'disponibilidade', component: DisponibilidadeComponent},
  {path: '', redirectTo:'/medicamento',pathMatch:'full'},
  {path: 'banco-dados', component:BancoDadosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
