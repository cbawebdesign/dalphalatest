import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {ContactusComponent} from './contactus/contactus.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [
    ContactusComponent
  ],
  providers: [
  ],
  exports: [
    ContactusComponent
  ]
})
export class SharedModule {}
