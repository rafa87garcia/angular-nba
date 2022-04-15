import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListTeamComponent } from './list-team/list-team.component';


@NgModule({
  declarations: [
    ListTeamComponent,
    TeamsComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule
  ]
})
export class TeamsModule { }
