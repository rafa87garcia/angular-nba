import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from './core/guards/auth-user.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./pages/players/players.module').then(m => m.PlayersModule)
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./pages/teams/teams.module').then(m => m.TeamsModule)
  },
  {
    path: 'my-account',
    loadChildren: () =>
      import('./pages/my-account/my-account.module').then(m => m.MyAccountModule),
    canActivate: [AuthUserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthUserGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
