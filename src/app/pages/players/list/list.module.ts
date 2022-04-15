import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    RouterModule,
    SharedModule,
  ]
})
export class ListModule { }
