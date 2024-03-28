import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import { menu } from '../../interfaces/menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild("modal") modal?: ElementRef<HTMLDialogElement>;

  @Input() fotos:menu[] = []

  indiceSeleccionado = signal(0)


  cerrarModal(){
    this.modal?.nativeElement.close();
  }

  onCardClicked(i:number){
    this.indiceSeleccionado.set(i)
    this.modal?.nativeElement.showModal();
  }
}
