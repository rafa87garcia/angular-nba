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

  constructor(private http: HttpClient) { }

  public getPlayers(): Observable<PlayerInterface[]> {

    return (this.http.get(`${path_base}/players`) as Observable<any>)
      .pipe(
        map(res => res.data),
        map(data => {
          return data.map(({ first_name, position }: any) => ({
            name: first_name,
            position: position
          }));
        })) as Observable<PlayerInterface[]>;
      // .pipe(
      //   map(res => {
      //      return res.map(data => data);
      //   }) as Observable<PlayerInterface[]>
      // )
  }
}