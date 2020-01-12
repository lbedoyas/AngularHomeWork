import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitulosComponent } from './components/titulos/titulos.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AgregarUsuariosComponent } from './components/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';


const routes: Routes = [
  {
    path: '' , component: TitulosComponent
  },
  {
    path: 'pipes', component: PipesComponent
  },
  {
    path: 'eventos', component: EventosComponent
  },
  {
    path: 'usuarios', component: UsuariosComponent, children: [
      {
        path: 'agregar', component: AgregarUsuariosComponent
      },
      {
        path: 'editar', component: EditarUsuariosComponent
      }
    ]
  },
  {
    path: 'articulo', component: ArticuloComponent
  },
  {
    path: 'articuloDetalle', component: ArticuloDetalleComponent
  },
  {
    path: '**', component: Pagina404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
