import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamInterface } from '../models/team.model';


const path_base: string = "https://www.balldontlie.io/api/v1";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private http: HttpClient
  ) { }

  public getTeams(): Observable<TeamInterface[]> {

    return (this.http.get(`${path_base}/teams`) as Observable<any>)
      .pipe(
        map(res => res.data),
        map(data => {
          return data.map((team: TeamInterface) => ({
            id: team.id,
            name: team.name,
            full_name: team.full_name
          }));
        })) as Observable<TeamInterface[]>;
  }

  public getTeamById(id: String): Observable<TeamInterface> {
    return (this.http.get<TeamInterface>(`${path_base}/teams/${id}`) as Observable<any>)
      .pipe(
        map(data => {
          const team: TeamInterface = data;
          return ({
            id: team.id,
            name: team.full_name,
          })
        })) as Observable<TeamInterface>;
  }
}