import { Component } from '@angular/core';

@Component({
    selector:'app-estudiantes',
    templateUrl: 'estudiantes.component.html'
})

export class EstudiantesComponent{
    nombre='Carolina';
    edad=23;
    obtenerNombre():string{
        return `${this.nombre} ${this.edad}`
    }

    get NombreMayusculas(){
        return this.nombre.toLocaleUpperCase();
    }
}