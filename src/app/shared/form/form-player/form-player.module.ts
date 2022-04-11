import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPlayerComponent } from './form-player.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormPlayerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormPlayerComponent
  ]
})
export class FormPlayerModule { }
