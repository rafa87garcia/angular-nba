import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../models/team.model';


const path_base: string = "https://www.balldontlie.io/api/v1";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private http: HttpClient
  ) { }

  public getTeams(): Observable<Team[]> {

    return (this.http.get(`${path_base}/teams`) as Observable<any>)
      .pipe(
        map(res => res.data),
        map(data => {
          return data.map((team: Team) => ({
            id: team.id,
            name: team.name,
            full_name: team.full_name
          }));
        })) as Observable<Team[]>;
  }

  public getTeamById(id: String): Observable<Team> {
    return (this.http.get<Team>(`${path_base}/teams/${id}`) as Observable<any>)
      .pipe(
        map(data => {
          const team: Team = data;
          return ({
            id: team.id,
            name: team.full_name,
          })
        })) as Observable<Team>;
  }
}