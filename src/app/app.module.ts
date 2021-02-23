import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HelloComponent } from './EjercicioGrupal/ejercicios/hello.component';
import { ByeComponent } from './EjercicioGrupal/ejercicios/bye.component';
import { EjerciciosComponent } from './EjercicioGrupal/ejercicios/ejercicios.component';
import { MainComponent } from './EjercicioGrupal/main/main.component';
import { EstudiantesModule } from './Ejercicio3/listado/estudiantes.module';
import { ContadoresModule } from './Ejercicio1/contador.module';
import { MainPageComponent } from './Presidentes/main-page/main-page.component';
import { PresidentesModule } from './Presidentes/main-page/presidentes.module';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
     ByeComponent ,
    EjerciciosComponent,
    MainComponent,
    MainPageComponent,
  ],
  entryComponents: [ HelloComponent, ByeComponent ],
  imports: [
    BrowserModule,FormsModule,
    EstudiantesModule,
    ContadoresModule,
    PresidentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
