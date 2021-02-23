import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstudiantesComponent } from 'src/app/Ejercicio2/estudiantes.component';
import { ListadoComponent } from './listado.component';

@NgModule({
    //enumerar los componentes a usar
    declarations:[
        EstudiantesComponent,
        ListadoComponent
    ],
    //CommonMode nos ayuda a trabajar con los Ng osea trabaja con las directivas
    imports:[
        CommonModule
    ],
    //Que los componentes sean accedidos desde otro lado
    exports:[
        ListadoComponent,
        EstudiantesComponent
    ]
})
export class EstudiantesModule{

}