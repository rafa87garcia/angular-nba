import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersResolver implements Resolve<Player[]> {

  constructor(
    private playerService: PlayerService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player[]> {
    return this.playerService.getPlayers();
  }
}
