import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './Ejercicio1/contador.component';
import { EstudiantesComponent } from './Ejercicio2/estudiantes.component';
import { ListadoComponent } from './Ejercicio3/listado/listado.component';
import { EjemploIfComponent } from './EjercicioGrupal/ejemplo-if/ejemplo-if.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EstudiantesComponent,
    ListadoComponent,
    EjemploIfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
