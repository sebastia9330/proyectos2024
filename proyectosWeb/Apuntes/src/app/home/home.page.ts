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

  

  listaTodasPersonas: usuario[] = this.usuarioService.getAll();
  listaPersonas: usuario[] = this.listaTodasPersonas;

  persona = {
    nombre: "Sebastian Carrero",
    universidad: "Los Libertadores",
    carrera: "Ingenieria en Sistemas",
    materias: ["Contabilidad 1", "Matematicas 2", "Programacion Basica"]
  }

  filtrarListaPersonas(materia:string){
    if(materia === "todas") this.listaPersonas = this.listaTodasPersonas;
    this.listaPersonas = this.listaTodasPersonas.filter(persona =>
      persona.materias.includes(materia))
  }

}
