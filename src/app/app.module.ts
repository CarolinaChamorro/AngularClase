import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContadorComponent } from './Ejercicio1/contador.component';
import { EstudiantesComponent } from './Ejercicio2/estudiantes.component';
import { ListadoComponent } from './Ejercicio3/listado/listado.component';
import { HelloComponent } from './EjercicioGrupal/ejercicios/hello.component';
import { ByeComponent } from './EjercicioGrupal/ejercicios/bye.component';
import { EjerciciosComponent } from './EjercicioGrupal/ejercicios/ejercicios.component';
import { MainComponent } from './EjercicioGrupal/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EstudiantesComponent,
    ListadoComponent,
    HelloComponent,
     ByeComponent ,
    EjerciciosComponent,
    MainComponent
  ],
  entryComponents: [ HelloComponent, ByeComponent ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
