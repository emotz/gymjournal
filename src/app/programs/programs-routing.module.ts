import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramComponent } from './program/program.component';
import { ProgramsComponent } from './programs.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramsComponent,
    children: [
      {
        path: '',
        component: ProgramListComponent,
      },
      {
        path: ':id',
        component: ProgramComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramsRoutingModule { }

export const routedComponents = [ProgramsComponent, ProgramListComponent, ProgramComponent];