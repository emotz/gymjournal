import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule, routedComponents } from './exercises-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ],
  declarations: [routedComponents]
})
export class ExercisesModule { }