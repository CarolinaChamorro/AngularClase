import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';


@NgModule({
    //enumerar los componentes a usar
    declarations:[
        ContadorComponent
    ],
    //CommonMode nos ayuda a trabajar con los Ng osea trabaja con las directivas
    imports:[
        CommonModule
    ],
    //Que los componentes sean accedidos desde otro lado
    exports:[
        ContadorComponent
    ]
})
export class ContadoresModule{

}