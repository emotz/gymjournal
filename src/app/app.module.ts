import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ProgramService } from './models';
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
  providers: [ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
