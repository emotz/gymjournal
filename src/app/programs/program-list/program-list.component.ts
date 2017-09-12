import { Component, Input, OnInit } from '@angular/core';
//import { CommonModule } from 

import { Program, ProgramService } from '../../models';

@Component({
  selector: 'gj-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  programs: Program[];
  constructor(private programService: ProgramService) { }

  getPrograms() {
    this.programs = [];

    this.programService.getPrograms()
      .subscribe(programs => {
        this.programs = programs;
      });
  }
  /*ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }*/

  ngOnInit() {
    //componentHandler.upgradeDom();
    this.getPrograms();
    /*this.dbResetSubscription = this.characterService.onDbReset
      .subscribe(() => this.getCharacters());*/
  }



}
