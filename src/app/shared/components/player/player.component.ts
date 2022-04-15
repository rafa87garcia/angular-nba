import { Component, Input, OnInit } from '@angular/core';
import { PlayerInterface } from '../../models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player?: PlayerInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
