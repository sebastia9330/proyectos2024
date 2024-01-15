import { Component } from '@angular/core';
import { coincidencia } from '../core/interfaces/coincidencias';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  listaPersonas: coincidencia[] = [
    {
      nombre : "Dilza Robles",
      metodoEstudio: ["presencial"],
      coincidencias: ["Matematicas 2", "Contabilidad 1"]
    },
    {
      nombre : "Sebastian Carrero",
      metodoEstudio: ["virtual"],
      coincidencias: ["Matematicas 2"]
    }
  ]

}
