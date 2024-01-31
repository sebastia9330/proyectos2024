import { Component } from '@angular/core';
import { usuario } from '../core/interfaces/coincidencias';
import { UsuariosService } from '../core/services/usuarios.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewWillEnter{

  constructor(private usuarioService: UsuariosService) {}

  ionViewWillEnter(): void {
    this.listaTodasPersonas = this.usuarioService.getByCoincidencia(this.persona.materias);
  }

  
  persona:usuario = this.usuarioService.currentUser!;

  
  listaTodasPersonas: usuario[] = this.usuarioService.getByCoincidencia(this.persona.materias);
  listaPersonas: usuario[] = this.listaTodasPersonas;

  filtrarListaPersonas(materia:string){
    if(materia === "todas") {
    this.listaPersonas = this.listaTodasPersonas;
    return
    }
    this.listaPersonas = this.listaTodasPersonas.filter(persona =>
      persona.materias.includes(materia))
  }
  

}
