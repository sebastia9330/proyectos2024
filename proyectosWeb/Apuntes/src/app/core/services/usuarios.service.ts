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

  listaTodasPersonas: usuario[] = [
    {
      nombre : "Dilza Robles",
      universidad: "Los Libertadores",
      carrera: {
        nombre: "Ingenieria en Sistemas",
        universidad: "Los Libertadores",
        materias: [
            {
                nombre: "Contabilidad 1",
                seccion: "2",
                estudia:false
            },
            {
                nombre: "Matematicas 2",
                seccion: "1",
                estudia:true
            },
            {
                nombre: "Programacion Basica",
                seccion: "3",
                estudia:true
            }
        ]
      },
      materias:["Contabilidad 1","Programacion Basica"],
      metodoEstudio: ["presencial"],
    },
    {
      nombre : "Sebastian Carrero",
      universidad: "Los Libertadores",
      carrera: {
        nombre: "Ingenieria en Sistemas",
        universidad: "Los Libertadores",
        materias: [
            {
                nombre: "Contabilidad 1",
                seccion: "2",
                estudia:false
            },
            {
                nombre: "Matematicas 2",
                seccion: "1",
                estudia:true
            },
            {
                nombre: "Programacion Basica",
                seccion: "3",
                estudia:true
            }
        ]
      },
      materias:["Contabilidad 1","Programacion Basica"],
      metodoEstudio: ["virtual"],
    }
  ]

}
