import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from '../models/player.model';


const path_base: string = "https://622cd50b087e0e041e14b7dd.mockapi.io/api/v1";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private http: HttpClient
  ) { }

  public getPlayers(): Observable<Player[]> {

    return (this.http.get(`${path_base}/Players/`) as Observable<any>)
      .pipe(
        //map(res => res.data),
        map(data => {
          return data.map((player: any) => ({
            id: player.id,
            first_name: player.first_name,
            last_name: player.last_name,
          }));
        })) as Observable<Player[]>;
  }

  public getPlayerById(id: String): Observable<Player> {
    return (this.http.get<Player>(`${path_base}/Players/${id}`) as Observable<any>)
      .pipe(
        map(data => {
          const player = data;
          return ({
            id: player.id,
            first_name: player.first_name,
            last_name: player.last_name,
            height_feet: player.height_feet,
            height_inches: player.height_inches,
            position: player.position,
          })
        })) as Observable<Player>;
  }

  public createPlayer(player: Player): Observable<Player> {
    return this.http.post(`${path_base}/Players`, player) as Observable<Player>;
  }

  public deletePlayer(id: string): Observable<Player> {
    return this.http.delete(`${path_base}/Players/${id}`) as Observable<Player>;
  }

  public editPlayer(id: string, body: Player): Observable<Player> {
    return this.http.put(`${path_base}/Players/${id}`, body) as Observable<Player>;
  }
}