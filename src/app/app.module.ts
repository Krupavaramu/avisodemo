import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassDataService } from './services/classdata.service';
// import { GridComponent } from './shared/grid/grid.component';
import { HttpModule } from '@angular/http';
import { KeysPipe } from './pipe/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    // GridComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ClassDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
