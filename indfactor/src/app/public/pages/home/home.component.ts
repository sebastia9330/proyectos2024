import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/core/interfaces/menu';
import { FotosService } from 'src/app/core/services/fotos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fotos: menu[] = [];

  constructor(private FS: FotosService){}

  ngOnInit(): void {
    this.FS.getAll().then(res => this.fotos = res);
  }

}

