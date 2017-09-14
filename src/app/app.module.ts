import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
/*import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ProgramService, ExerciseService } from './models';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [    
    BrowserModule,
    HttpModule,

    AppRoutingModule,
    CoreModule
  ],
  providers: [ProgramService, ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
