import { Injectable } from '@angular/core';
import { usuario } from '../interfaces/coincidencias';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getAll(){
    return this.listaTodasPersonas;
  }

  getById(){

  }

  getByCoincidencia(materias:string[]){
    const todos = this.getAll();
    const coincidencias = [];
    materias.forEach(materia =>{
      todos.forEach(persona =>{
        persona.materias
      })
    })
  }

  listaTodasPersonas: usuario[] = [
    {
      nombre : "Dilza Robles",
      universidad: "Los Libertadores",
      carrera: "Contaduria Publica",
      metodoEstudio: ["presencial"],
      materias: ["Matematicas 2", "Contabilidad 1"]
    },
    {
      nombre : "Sebastian Carrero",
      universidad: "Los Libertadores",
      carrera: "Contaduria Publica",
      metodoEstudio: ["virtual"],
      materias: ["Matematicas 2"]
    }
  ]

}
