import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  persona = {
    nombre: "Sebastian Carrero",
    universidad: "Los Libertadores",
    carrera: "Ingenieria en Sistemas",
    materias: ["Contabilidad 2", "matematicas 1", "Programacion Basica"]
  }

}
