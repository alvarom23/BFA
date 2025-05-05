import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], // Incluye el HeaderComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // ← Corregido: styleUrls (con 's')
})
export class AppComponent {
  title = 'front';
}
