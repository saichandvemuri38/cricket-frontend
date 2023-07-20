import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public ingredient;
  public createTeams;
  public team1 = null;
  public team2 = null;
  public optedTo = 'Bat';
  public toss = 'Team 1';
  public overs = 5;
  public visible: boolean = false;
  public playersPerTeam = 11;
  public noBall = true;
  public noballreBall = true;
  public noBallrun = 1;
  public wideBall = true;
  public wideReBall = true;
  public wideBallrun = 1;

  constructor(public fb: FormBuilder,public router:Router) { }

  ngOnInit(): void {
  }
  public submit() {
    let obj = {
      team1: this.team1,
      team2: this.team2,
      optedTo: this.optedTo,
      toss: this.toss,
      overs: this.overs,
      advanceSettings: {
        playersPerTeam: this.playersPerTeam,
        noball: {
          noBall: this.noBall,
          noballreBall: this.noballreBall,
          noBallrun: this.noBallrun
        },
        wideball: {
          wideBall: this.wideBall,
          wideReBall: this.wideBall,
          wideBallrun: this.wideBallrun
        }
      }
    }
    console.log(obj);
    this.router.navigateByUrl('add-player');
  }
  public advanceObject;
  public advancedSubmit() {
    this.advanceObject = {
      playersPerTeam: this.playersPerTeam,
      noball: {
        noBall: this.noBall,
        noballreBall: this.noballreBall,
        noBallrun: this.noBallrun
      },
      wideball: {
        wideBall: this.wideBall,
        wideReBall: this.wideBall,
        wideBallrun: this.wideBallrun
      }
    }
    console.log(this.advanceObject)
    this.visible = false;
  }
  public showDialog() {
    this.visible = true;
  }
}
