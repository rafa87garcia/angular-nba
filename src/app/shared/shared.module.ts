import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './components/player/player.component';
import { RouterModule } from '@angular/router';

import { FormPlayerComponent } from './components/form-player/form-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPlayerPipe } from './pipes/filter-player.pipe';
import { TeamsComponent } from './components/team/team.component';



@NgModule({
  declarations: [
    FormPlayerComponent,
    PlayerComponent,
    TeamsComponent,
    FilterPlayerPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormPlayerComponent,
    PlayerComponent,
    TeamsComponent,
    FilterPlayerPipe,
  ]
})
export class SharedModule { }
