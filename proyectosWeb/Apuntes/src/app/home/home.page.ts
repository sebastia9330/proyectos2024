import { Component } from '@angular/core';
import { usuario } from '../core/interfaces/coincidencias';
import { UsuariosService } from '../core/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private usuarioService: UsuariosService) {}

  

  
  persona:usuario = {
    nombre: "Sebastian Carrero",
    universidad: "Los Libertadores",
    carrera: {
      nombre: "Ingenieria en Sistemas",
      universidad: "Los Libertadores",
      materias: [
        {
          nombre: "Contabilidad 1",
          seccion: "2",
          estudia: false
        },
        {
          nombre: "Matematicas 2",
          seccion: "1",
          estudia: true
        },
        {
          nombre: "Programacion Basica",
          seccion: "3",
          estudia: true
        }
      ]
    },
    metodoEstudio: [],
    materias:["Contabilidad 1","Programacion Basica"]
  }

  
  listaTodasPersonas: usuario[] = this.usuarioService.getByCoincidencia(this.persona.materias);
  listaPersonas: usuario[] = this.listaTodasPersonas;

  filtrarListaPersonas(materia:string){
    if(materia === "todas") this.listaPersonas = this.listaTodasPersonas;
    this.listaPersonas = this.listaTodasPersonas.filter(persona =>
      persona.materias.includes(materia))
  }

}
