import { Component, OnInit } from '@angular/core';


interface Presidentes{
  nombre:string;
  apellido:string;
  puntaje:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
 candidatos: Presidentes[]=[
{nombre: "Andres",
apellido:"Arauz",
puntaje:500},
{
  nombre:"Guillermo",
  apellido:"Lasso",
  puntaje:400
},
{
  nombre:"Yaku",
  apellido:"Perez",
  puntaje:300
},
{
  nombre:"Javier",
  apellido:"Herbas",
  puntaje:200
}
 ];
   
 
  nuevo: Presidentes={
    nombre:'',
    apellido:'',
    puntaje:0
  }

 agregar ():any{
   console.log(this.nuevo);
   this.candidatos.push(this.nuevo);
   this.nuevo={
     nombre:'',
     apellido:'',
     puntaje:0
   }
 }

}
