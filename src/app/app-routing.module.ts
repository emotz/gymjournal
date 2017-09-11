import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'programs', },
  { path: 'programs', loadChildren: 'app/programs/programs.module#ProgramsModule' },
  { path: 'exercises', loadChildren: 'app/exerсises/exercises.module#ExercisesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


