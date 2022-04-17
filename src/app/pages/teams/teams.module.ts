import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TeamsComponent,
    ListTeamComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule
  ],
  exports: [
    TeamsComponent,
    ListTeamComponent,
  ]
})
export class TeamsModule { }
