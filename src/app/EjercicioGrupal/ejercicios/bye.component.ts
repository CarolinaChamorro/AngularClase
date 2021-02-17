import { Component } from '@angular/core';

@Component({
  template: `<div>{{msg}}</div>`
})
export class ByeComponent {
  public msg = 'Componente Bye está aquí!!!';

  constructor() {
    console.log('ByeComponent generated');
  }
}