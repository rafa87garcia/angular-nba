import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './components/player/player.component';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { FormPlayerComponent } from './form/form-player/form-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPlayerPipe } from '../pipes/filter-player.pipe';



@NgModule({
  declarations: [
    FormPlayerComponent,
    PlayerComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormPlayerComponent,
    PlayerComponent,
    TeamComponent,
  ]
})
export class SharedModule { }
