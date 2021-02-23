import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-candidatos',
  templateUrl: './lista-candidatos.component.html',
  styleUrls: ['./lista-candidatos.component.css']
})
export class ListaCandidatosComponent {
@Input() candidatos:any[]=[];

}
