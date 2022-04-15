import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './players.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';
import { PlayersRoutingModule } from './players-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    PlayersComponent,
    CreateComponent,
    ModifyComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule,
    FormsModule,
    PipesModule,
  ],
  exports: [
    PlayersComponent,
  ]
})
export class PlayersModule { }
