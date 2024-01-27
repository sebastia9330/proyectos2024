import { Component } from '@angular/core';
import { listaTodasPersonas } from './core/interfaces/coincidencias';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log()
    if(localStorage.getItem("personas") === null){
      localStorage.setItem("personas",JSON.stringify(listaTodasPersonas))
    }
  }
}
