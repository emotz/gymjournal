import { NgModule } from '@angular/core';

//import { CharacterButtonComponent } from './shared/character-button/character-button.component';
//import { SortCharactersPipe } from './shared/sort-characters.pipe';
import { ProgramsRoutingModule, routedComponents } from './programs-routing.module';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ProgramsRoutingModule],
  declarations: [routedComponents]
})
export class ProgramsModule { }