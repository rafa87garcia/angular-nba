import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public players: Player[] = [];
  public filter: string;

  constructor(
    private playerService: PlayerService
  ) {
    this.filter = '';
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  public getPlayers() {
    this.playerService.getPlayers().subscribe((data) => {
      this.players = data;
    });
  }

  public deletePlayer(id: string) {
    this.playerService.deletePlayer(id).subscribe(res => {
      console.log(res);
      this.getPlayers();
    });
  }
}
