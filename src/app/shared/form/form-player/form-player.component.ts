import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.scss']
})
export class FormPlayerComponent implements OnInit {

  public formPlayer?: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }
  
  private buildForm() {
    this.formPlayer = this.fb.group({
      name: ['', Validators.required],
      player: ['',[Validators.required]]
    });
    
  }

  public save(event: Event) {
    event.preventDefault();
    
    if (this.formPlayer?.valid) {
      console.log(this.formPlayer?.value);
      
    }
    
  }

}
