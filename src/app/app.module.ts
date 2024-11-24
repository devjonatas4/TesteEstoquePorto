import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { DisponibilidadeComponent } from './disponibilidade/disponibilidade.component';
import { BancoDadosComponent } from './banco-dados/banco-dados.component';
import { CapitalizePipe } from './capitalize.pipe';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    MedicamentoComponent,
    DisponibilidadeComponent,
    BancoDadosComponent,
    CapitalizePipe,
    CardComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
