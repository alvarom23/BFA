// inicio-sesion.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; // ✅ Importar Router

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router 

  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }

    this.http
      .post('http://localhost/ProyectoBFA/back/php/api/inicio_de_sesion.php', this.loginForm.value)
      .subscribe({
        next: (res: any) => {
          console.log('Respuesta del backend:', res);
          if (res.mensaje === 'Inicio de sesión exitoso') {
            alert('Inicio de sesión exitoso');
            // this.router.navigate(['/dashboard']); // Puedes activar esto si tienes un dashboard
          } else {
            alert(res.mensaje);
          }
        },
        error: err => {
          console.error('Error en el inicio de sesión:', err);
          alert('Error de conexión con el servidor.');
        }
      });
  }

  irARegistro() {
    this.router.navigate(['/registro']); // redirigir al formulario de registro
  }
}
