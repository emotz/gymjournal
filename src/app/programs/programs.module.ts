import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CharacterButtonComponent } from './shared/character-button/character-button.component';
//import { SortCharactersPipe } from './shared/sort-characters.pipe';
import { ProgramsRoutingModule, routedComponents } from './programs-routing.module';
//import { ProgramAddComponent } from './program-add/program-add.component';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ],
  exports: [
    //ProgramAddComponent
  ],
  declarations: [routedComponents]
})
export class ProgramsModule { }