import { NgModule } from '@angular/core';
import { FilterPlayerPipe } from './filter-player.pipe';



@NgModule({
  declarations: [
    FilterPlayerPipe,
  ],
  exports: [
    FilterPlayerPipe,
  ]
})
export class PipesModule { }
