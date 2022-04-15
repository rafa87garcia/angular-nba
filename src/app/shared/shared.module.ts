import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPlayerModule } from './form/form-player/form-player.module';
import { PlayerComponent } from './components/player/player.component';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './components/team/team.component';



@NgModule({
  declarations: [
    PlayerComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FormPlayerModule,
    PlayerComponent,
    TeamComponent,
  ]
})
export class SharedModule { }
