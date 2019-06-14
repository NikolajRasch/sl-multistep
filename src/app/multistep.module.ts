import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MultiStepComponent } from './multistep.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MultiStepComponent ],
  bootstrap:    [ MultiStepComponent ]
})
export class MultiStepModule { }
