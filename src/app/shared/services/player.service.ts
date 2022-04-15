import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerInterface } from '../models/player.model';


const path_base: string = "https://www.balldontlie.io/api/v1";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private http: HttpClient
  ) { }

  public getPlayers(): Observable<PlayerInterface[]> {

    return (this.http.get(`${path_base}/players`) as Observable<any>)
      .pipe(
        map(res => res.data),
        map(data => {
          return data.map((player: any) => ({
            id: player.id,
            name: player.first_name,
            position: player.position
          }));
        })) as Observable<PlayerInterface[]>;
  }

  public getPlayerById(id: String): Observable<PlayerInterface> {
    return (this.http.get<PlayerInterface>(`${path_base}/players/${id}`) as Observable<any>)
      .pipe(
        map(data => {
          const player = data;
          return ({
            name: player.first_name,
            position: player.position
          })
        })) as Observable<PlayerInterface>;
  }
}