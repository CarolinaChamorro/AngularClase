import { Component} from '@angular/core';
import { HelloComponent } from '../ejercicios/hello.component';
import { ByeComponent } from '../ejercicios/bye.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent  {
 
  public components = [HelloComponent, ByeComponent];
  public currentComponent: any = null;


  public render(): void {
    const index = Math.round(Math.random());
    this.currentComponent = this.components[index];
  }
  

}
