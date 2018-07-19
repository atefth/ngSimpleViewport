import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSimpleMaterialModule } from './ng-simple-material/ng-simple-material.module';
import { NgcFloatButtonModule } from 'ngc-float-button';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResponsiveResizerComponent } from './responsive-resizer/responsive-resizer'

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveResizerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgSimpleMaterialModule,
    NgcFloatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
