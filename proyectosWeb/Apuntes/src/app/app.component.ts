import { Component } from '@angular/core';
import { currentUserDefault, listaTodasPersonas } from './core/interfaces/coincidencias';

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
    if(localStorage.getItem("currentUser") === null){
      localStorage.setItem("currentUser",JSON.stringify(currentUserDefault))
    }
  }
}
