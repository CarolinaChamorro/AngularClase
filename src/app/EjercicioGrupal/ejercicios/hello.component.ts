import { Component } from '@angular/core';

@Component({
  template: `<div>{{name}}!</div>`,
})
export class HelloComponent  {
  public name = 'Componente Hola está aquí!!!';

  constructor() {
    console.log('HelloComponent generated');
  }
}