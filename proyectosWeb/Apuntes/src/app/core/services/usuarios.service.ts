import { Injectable, OnInit } from '@angular/core';
import { listaTodasPersonas, usuario } from '../interfaces/coincidencias';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService{

  constructor() {
    this.currentUser = this.getCurrentUser()
  }
  
    
  currentUser:usuario | undefined;
    

  getAll():usuario[]{
    return JSON.parse(localStorage.getItem("personas")!);
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem("currentUser")!);
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


  cambiarEstadoMateria(materia:string,estado:any){
    console.log(materia,estado.detail.checked)
    if(estado.detail.checked){
      this.currentUser!.materias.push(materia)
    }else{
      this.currentUser!.materias = this.currentUser!.materias.filter(materiaLoop => materiaLoop !== materia);
    }
    this.updateCurrentUser();
  }

  updateCurrentUser(){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }


}
