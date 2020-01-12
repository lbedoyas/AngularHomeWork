import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { FormsModule } from '@angular/forms';
import { EventosComponent } from './components/eventos/eventos.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ContinuaraPipe } from './Pipes/continuara.pipe';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { MenuComponent } from './components/menu/menu.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { AgregarUsuariosComponent } from './components/agregar-usuarios/agregar-usuarios.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    EventosComponent,
    DirectivasComponent,
    PipesComponent,
    ContinuaraPipe,
    Pagina404Component,
    MenuComponent,
    EncabezadoComponent,
    UsuariosComponent,
    EditarUsuariosComponent,
    AgregarUsuariosComponent,
    ArticuloComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
