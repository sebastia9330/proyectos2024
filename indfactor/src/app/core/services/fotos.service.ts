import { Injectable } from '@angular/core';
import { fotos } from '../constantes/fotos';
import { menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor() { }

  async getAll():Promise<menu[]>{
    return fotos;
  }
}
