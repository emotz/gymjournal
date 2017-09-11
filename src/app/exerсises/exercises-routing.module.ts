import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisesComponent } from './exercises.component';

const routes: Routes = [
  {
    path: '',
    component: ExercisesComponent,
    children: [
      {
        path: '',
        component: ExerciseListComponent,
      },
      {
        path: ':id',
        component: ExerciseComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesRoutingModule { }

export const routedComponents = [ExercisesComponent, ExerciseListComponent, ExerciseComponent];