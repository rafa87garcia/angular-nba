import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../../core/models/player.model';

@Pipe({
  name: 'filterPlayer'
})
export class FilterPlayerPipe implements PipeTransform {

  transform(players: Player[], filter: string): Player[] {
    const stringFiltrado: string = filter.toLowerCase().trim();
    const listaFiltrada: Player[] = players.filter(({ first_name }) => {
      return first_name.toLowerCase().includes(stringFiltrado);
    });
    return listaFiltrada;
  }

}
