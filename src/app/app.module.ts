import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    AppRoutingModule,
    TablaCursosComponent,
    TablaAlumnosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
