import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/core/models/player.model';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public players: Player[] = [];
  public filter: string;

  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.filter = '';
  }

  ngOnInit(): void {
    // this.players = this.activatedRoute.snapshot.data[0];
    this.getPlayers();
  }

  public getPlayers() {
    this.playerService.getPlayers().subscribe((data) => {
      this.players = data;
    });
  }

  public deletePlayer(id: string) {
    this.playerService.deletePlayer(id).subscribe(res => {
      this.getPlayers();
    });
  }
}
