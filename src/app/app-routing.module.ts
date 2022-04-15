import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'players', loadChildren: () =>
      import('./pages/players/players.module').then(m => m.PlayersModule)
  },
  {
    path: 'teams', loadChildren: () =>
      import('./pages/teams/teams.module').then(m => m.TeamsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
