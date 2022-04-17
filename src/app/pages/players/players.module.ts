import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './players.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';
import { PlayersRoutingModule } from './players-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    ListComponent,
    PlayersComponent,
    CreateComponent,
    ModifyComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    PlayersComponent,
  ]
})
export class PlayersModule { }
