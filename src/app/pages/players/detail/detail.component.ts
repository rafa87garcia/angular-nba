import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/shared/models/player.model';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  public player?: Player;

  constructor(
    private route: ActivatedRoute,
    private playerSevice: PlayerService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idPlayer = params["id"];
      this.playerSevice.getPlayerById(idPlayer).subscribe(player => {
        this.player = player;
      });
    });
  }

}