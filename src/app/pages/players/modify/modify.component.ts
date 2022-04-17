import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/core/models/player.model';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  public player?: Player;

  constructor(
    private router: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const idPlayer = params["id"];
      this.playerService.getPlayerById(idPlayer).subscribe((player) => {
        this.player = player;
      });
    });
  }
}
