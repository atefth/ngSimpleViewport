import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule } from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule],
  declarations: []
})
export class NgSimpleMaterialModule { }
