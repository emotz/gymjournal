import { Component, Input, OnInit } from '@angular/core';
import { Optional } from "@angular/core";

/*import { Overlay, overlayConfigFactory, DialogRef } from 'ngx-modialog';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';*/

import { Program, ProgramService } from '../../models';
//import { ProgramAddComponent } from '../program-add/program-add.component';

@Component({
  moduleId: module.id,
  selector: 'gj-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  title = 'Programs';
  programs: Program[];
  //dialogRef: MdDialogRef<any>;

  constructor(
    private programService: ProgramService,
  ) { }

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

  /*openProgramAddDialog(key) {
    this.dialogRef = this.modal.open(key);
    this.dialogRef.componentInstance.param1 = "test value";
    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
    //return this.modal.open(ProgramAddComponent,  overlayConfigFactory({}, BSModalContext));
  }*/

  ngOnInit() {
    //componentHandler.upgradeDom();
    this.getPrograms();
    /*this.dbResetSubscription = this.characterService.onDbReset
      .subscribe(() => this.getCharacters());*/
  }
}
