import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPlayerModule } from './form/form-player/form-player.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormPlayerModule
  ]
})
export class SharedModule { }
