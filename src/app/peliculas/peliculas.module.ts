import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PelisComponent } from './pelis/pelis.component';


@NgModule({
  declarations: [
    PelisComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
