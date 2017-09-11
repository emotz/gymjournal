import { NgModule } from '@angular/core';

import { ExercisesRoutingModule, routedComponents } from './exercises-routing.module';

@NgModule({
  imports: [ExercisesRoutingModule],
  declarations: [routedComponents]
})
export class ExercisesModule { }