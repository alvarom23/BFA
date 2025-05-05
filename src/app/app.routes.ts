import { Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegisterComponent } from './registro/registro.component';



export const routes: Routes = [

    { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },  // Redirigir al registro al inicio
    { path: 'registro', component: RegisterComponent },  // Ruta para el formulario de registro
    { path: 'inicio-sesion', component: InicioSesionComponent },  // Ruta para el formulario de inicio de sesión
    { path: '**', redirectTo: '/inicio-sesion' }  // Redirigir al registro en caso de rutas desconocidas
];

