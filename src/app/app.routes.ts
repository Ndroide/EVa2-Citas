import { Routes } from '@angular/router';

// IMPORTA AQUÍ tus páginas
import { InicioPage } from './pages/inicio/inicio.page';
import { GestionCitasPage } from './pages/gestion-citas/gestion-citas.page';
import { ConfiguracionPage } from './pages/configuracion/configuracion.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioPage
  },
  {
    path: 'gestion-citas',
    component: GestionCitasPage
  },
  {
    path: 'configuracion',
    component: ConfiguracionPage
  }
];