import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { AfiliadosComponent } from "./afiliados/AfiliadosComponent";
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent} from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'afiliados',
    component: AfiliadosComponent
  },
  {
    path: 'detalleafiliado/:id',
    component: DetalleComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
