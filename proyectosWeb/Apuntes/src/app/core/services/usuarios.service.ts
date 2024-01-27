import { Injectable } from '@angular/core';
import { listaTodasPersonas, usuario } from '../interfaces/coincidencias';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getAll(){
    return listaTodasPersonas;
  }

  getById(){

  }

  getByCoincidencia(materias:string[]){
    const todos = this.getAll();
    const coincidencias:usuario[] = [];
    materias.forEach(materia =>{
      todos.forEach(persona =>{
        if(persona.materias.includes(materia) && !coincidencias.includes(persona)){
          coincidencias.push(persona);
        }
      })
    })
    return coincidencias;
  }



}
