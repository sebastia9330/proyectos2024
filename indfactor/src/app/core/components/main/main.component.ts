import { Component, Input } from '@angular/core';
import { menu } from '../../interfaces/menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() fotos:menu[] = []

}
