import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  public batsman1 = null;
  public batsman2 = null;
  public bowler = null;
  constructor(public router: Router) { }
  ngOnInit(): void {
  }
  public submit() {
    let obj = {
      batsman1: this.batsman1,
      batsman2: this.batsman2,
      bowler: this.bowler
    }
    console.log(obj);
    this.router.navigateByUrl('score-board');
  }
}
