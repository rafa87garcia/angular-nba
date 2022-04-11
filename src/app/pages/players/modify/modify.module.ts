import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifyRoutingModule } from './modify-routing.module';
import { FormPlayerModule } from 'src/app/shared/form/form-player/form-player.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModifyRoutingModule,
    FormPlayerModule
  ]
})
export class ModifyModule { }
