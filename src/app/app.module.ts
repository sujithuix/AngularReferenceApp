import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParentToChildCommComponent } from './parent-to-child-comm/parent-to-child-comm.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TempConverterPipe } from './temp-converter.pipe';
import { TemperatureConverterPipe } from './temperature-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParentToChildCommComponent,
    DataBindingComponent,
    DirectivesComponent,
    TempConverterPipe,
    TemperatureConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
