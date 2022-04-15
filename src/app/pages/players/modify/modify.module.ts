import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifyRoutingModule } from './modify-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModifyRoutingModule,
    SharedModule
  ]
})
export class ModifyModule { }
