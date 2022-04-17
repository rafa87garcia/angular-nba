import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../../core/models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() public player?: Player;
  @Input() public preview: boolean = false;
  @Input() public enabledEdit: boolean = false;
  @Output() public OnDeletePlayer = new EventEmitter<string>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public editPlayer() {
    this.router.navigate(['players/modify', this.player?.id]);
  }

  public deletePlayer() {
    if (this.player?.id) {
      this.OnDeletePlayer.emit(this.player.id);
    }
  }
}
