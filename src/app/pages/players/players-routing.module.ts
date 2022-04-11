import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list', loadChildren: () =>
      import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: 'create', loadChildren: () =>
      import('./create/create.module').then(m => m.CreateModule)
  },
  {
    path: 'modify', loadChildren: () =>
      import('./modify/modify.module').then(m => m.ModifyModule)
  },
  {
    path: 'detail/:id', loadChildren: () =>
      import('./detail/detail.module').then(m => m.DetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
