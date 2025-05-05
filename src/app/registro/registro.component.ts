// registro.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      dni:      ['', Validators.required],
      name:     ['', Validators.required],
      lastName: ['', Validators.required],
      userType: [0, Validators.required],
      gender:   [''],
      username: [''],
      location: [''],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }
  
    this.http.post('http://localhost/ProyectoBFA/back/php/api/registro.php', this.registerForm.value)
      .subscribe({
        next: (res: any) => {
          if (res?.mensaje) {
            alert(res.mensaje);  // Debería decir "Registro exitoso"
          } else {
            alert('Respuesta inesperada del servidor.');
            console.warn('Respuesta:', res);
          }
        },
        error: (err) => {
          console.error('Error en el registro:', err);
          alert('Hubo un error al registrar. Revisa la consola.');
        }
      });
  }
  

}
