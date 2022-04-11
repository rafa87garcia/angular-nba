import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './players.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';
import { PlayersRoutingModule } from './players-routing.module';
import { FormPlayerModule } from 'src/app/shared/form/form-player/form-player.module';


@NgModule({
  declarations: [
    ListComponent,
    PlayersComponent,
    CreateComponent,
    ModifyComponent
  ],
  imports: [
    CommonModule,
    FormPlayerModule,
    PlayersRoutingModule,
  ],
  exports: [
    PlayersComponent,
  ]
})
export class PlayersModule { }
