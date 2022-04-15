import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.scss']
})
export class FormPlayerComponent implements OnInit {

  @Input() public player?: Player;

  public formPlayer?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    console.log(this.player);

    this.formPlayer = new FormGroup({
      first_name: new FormControl(this.player?.first_name || '', [Validators.required]),
      last_name: new FormControl(this.player?.last_name || '', [Validators.required]),
      height_feet: new FormControl(this.player?.height_feet || '', [Validators.required]),
      height_inches: new FormControl(this.player?.height_inches || '', [Validators.required]),
      position: new FormControl(this.player?.position || '', [
        Validators.required, Validators.maxLength(5)]),
    });
  }

  public save(event: Event) {
    event.preventDefault();

    if (this.formPlayer?.valid) {
      let playerRequest;
      console.log(this.formPlayer?.value);
      playerRequest = this.playerService.createPlayer(this.formPlayer?.value);
      playerRequest.subscribe(() => {
        this.route.navigate(['players/list']);
      });
      this.formPlayer.reset();
    }

  }

}
