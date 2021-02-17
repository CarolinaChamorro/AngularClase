import { Component } from '@angular/core';


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {
  //if 
  valor:number;
  constructor() { 
 function getRandom(max:number,min:number) {
  return Math.floor(Math.random() * (max - min) + min);
}
this.valor=getRandom(11,1)
  }

  //Switch
  public choose='';
  setvalue(drp:any){
    this.choose=drp.target.value;
  }
 
  

}
