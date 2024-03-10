import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numeroPedido: string;
  opcionSeleccionada!: string;

  constructor() {
    this.numeroPedido = this.generarNumeroPedido();
  }

  generarNumeroPedido(): string {
    const fechaActual = new Date();
    const numeroFactura = 'PEDIDO ' + fechaActual.getFullYear() + ('00' + (fechaActual.getMonth() + 1)).slice(-2) + ('00' + fechaActual.getDate()).slice(-2);
    return numeroFactura;
  }
  
}
