import { Component, OnInit } from '@angular/core';
import { PlayerInterface } from 'src/app/shared/models/player.model';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public players: PlayerInterface[] = [];
  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((data) => {
      this.players = data;
    });
  }

}
