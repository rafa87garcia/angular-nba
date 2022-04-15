import { Component, OnInit } from '@angular/core';
import { TeamInterface } from 'src/app/shared/models/team.model';
import { TeamsService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.scss']
})
export class ListTeamComponent implements OnInit {

  public teams?: TeamInterface[] = [];

  constructor(
    private teamService: TeamsService,
  ) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });

  }

}
