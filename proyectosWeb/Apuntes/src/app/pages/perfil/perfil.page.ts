import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/core/interfaces/coincidencias';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
materia: any;

  constructor() { }

  ngOnInit() {
  }

  modalMaterias=false;

  persona:usuario = {
    nombre: "Sebastian Carrero",
    universidad: "Los Libertadores",
    carrera:{
      nombre: "Ingenieria en Sistemas",
      universidad: "Los Libertadores",
      materias: [
        {
          nombre: "Contabilidad 1",
          seccion: "2",
          estudia: true
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
    materias:["Contabilidad 1","Programacion Basica"],
    metodoEstudio:[]
  }
  

  abrirModalMaterias(estado:boolean){
    this.modalMaterias = estado;
  }

}
