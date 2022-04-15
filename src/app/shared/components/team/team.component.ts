import { Component, Input, OnInit } from '@angular/core';
import { TeamInterface } from '../../models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() team?: TeamInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
