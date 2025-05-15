import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    // otras rutas
    {path: '', // Ruta raíz (por defecto)
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)}, // Carga HomeComponent aquí
    
    {path: 'contacto', loadComponent: () => import('./components/contacto/contacto.component').then(m => m.ContactoComponent)},
    {path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)},
    {path: 'registro', loadComponent: () => import('./components/registro-empleado/registro-empleado.component').then(m => m.RegistroEmpleadoComponent)},
    {path: 'carrusel', loadComponent: () => import('./components/shared/carrusel/carrusel.component').then(m => m.CarruselComponent)},
    {path: 'recuperaPassword', loadComponent: () => import('./components/recupera-password/recupera-password.component').then(m => m.RecuperaPasswordComponent)},
    {path: 'perfil', loadComponent: () => import('./components/perfil/perfil.component').then(m => m.PerfilComponent)},
    {path: 'perfil-admin', loadComponent: () => import('./components/admin/perfil-admin/perfil-admin.component').then(m => m.PerfilAdminComponent)},
];
