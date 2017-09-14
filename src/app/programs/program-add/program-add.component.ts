/*import { Component } from '@angular/core';

import { ModalComponent, CloseGuard} from 'ngx-modialog';
import { DialogRef } from 'ngx-modialog/src/models/dialog-ref'
import { BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { Program } from '../../models';

export class ProgramModalContext extends BSModalContext {
  public id: number;
  public name: string;
  public description: string;
}

@Component({
  moduleId: module.id,
  selector: 'gj-program-add',
  styles: [],
  template: ``
})

export class ProgramAddComponent implements CloseGuard, ModalComponent<ProgramModalContext> {
  context: ProgramModalContext;
  program: Program;

  public wrongAnswer: boolean;
  
    constructor(public dialog: DialogRef<ProgramModalContext>) {
      this.context = dialog.context;
      //this.program.description = this.context;
      dialog.setCloseGuard(this);
    }
  
    onKeyUp(value) {
      this.wrongAnswer = value != 5;
      this.dialog.close();
    }
    
    beforeDismiss(): boolean {
      return true;
    }
  
    beforeClose(): boolean {
      return this.wrongAnswer;
    }
}*/