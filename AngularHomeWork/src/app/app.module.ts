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

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    EventosComponent,
    DirectivasComponent,
    PipesComponent,
    ContinuaraPipe
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
