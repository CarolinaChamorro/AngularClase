import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaCandidatosComponent } from '../lista-candidatos/lista-candidatos.component';


@NgModule({
  declarations: [
    ListaCandidatosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[ListaCandidatosComponent]
})
export class PresidentesModule { }
