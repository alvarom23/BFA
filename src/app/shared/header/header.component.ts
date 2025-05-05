import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,  //no necesita declararse en modulo
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
