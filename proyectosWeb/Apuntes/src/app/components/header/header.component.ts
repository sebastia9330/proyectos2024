import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
