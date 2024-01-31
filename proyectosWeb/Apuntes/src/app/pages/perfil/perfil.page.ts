import { Component, OnInit } from '@angular/core';
import { ToggleCustomEvent } from '@ionic/angular';
import { usuario } from 'src/app/core/interfaces/coincidencias';
import { UsuariosService } from 'src/app/core/services/usuarios.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
materia: any;

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit() {
  }

  modalMaterias=false;

  persona:usuario = this.usuariosService.currentUser!;
  

  abrirModalMaterias(estado:boolean){
    this.modalMaterias = estado;
  }

  cambiarEstadoMateria(materia:string,estado:any){
    this.usuariosService.cambiarEstadoMateria(materia,estado)
    /* console.log(materia,estado.detail.checked)
    if(estado.detail.checked){
      this.persona.materias.push(materia)
    }else{
      this.persona.materias = this.persona.materias.filter(materiaLoop => materiaLoop !== materia);
    } */
  }
}
