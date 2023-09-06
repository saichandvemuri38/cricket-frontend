import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

export interface records {
  _id: any,
  userId: any,
  teams: [{ optedTo: String, team1: string, team2: string, toss: string, advanceSettings: { wideball: { wideBallrun: Number }, noball: { noBallrun: number } } }],
  player_record: [{ batsman1: String, batsman2: String, bowler: String }]
}
@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  public activeRouteId: any;
  public ballRecords: any = [];
  public overs: any;
  public extraRecords: any = false;
  public ballCount = 1;
  public records: records = {
    _id: null,
    userId: null,
    teams: [{ optedTo: null, team1: null, team2: null, toss: null, advanceSettings: null }],
    player_record: [{ batsman1: null, batsman2: null, bowler: null, }]
  };
  constructor(public apiService: ApiService, public route: ActivatedRoute) { }
  public ngOnInit(): void {
    this.getRecords();

  }
  getRecords() {
    this.route.queryParams.subscribe(param => { this.activeRouteId = param['item_id'] });
    this.apiService.records(this.activeRouteId).subscribe(res => {
      this.records = { ...res[0] };
      this.getBallRecords();
    })
  }
  public extraRuns: any = {};
  extras(value) {

    if (value == "wide") {
      this.extraRuns['wide'] = true;
      this.extraRuns['runs'] = +this.records.teams[0].advanceSettings.wideball.wideBallrun;
      console.log(this.extraRuns)
    }
    else if (value == "noBall") {
      this.extraRuns['noBall'] = true;
      this.extraRuns['runs'] = +this.records.teams[0].advanceSettings.noball.noBallrun;
      console.log(this.extraRuns)
    }
    else if (value == "byes") {
      this.extraRuns['byes'] = true;
      this.extraRuns['runs'] = 0;
      console.log(this.extraRuns)
    }
    else if (value == "legBye") {
      this.extraRuns['legBye'] = true;
      this.extraRuns['runs'] = 0;
      console.log(this.extraRuns)
    }
    else if (value == "wicket") {
      this.extraRuns['wicket'] = true;
      this.extraRuns['runs'] = +this.records.teams[0].advanceSettings.wideball.wideBallrun;
      console.log(this.extraRuns)
    }
  }

  round(item) {
    return item | 0;
  }

  ballValue(value) {
    let sum = value + ((this.extraRuns.runs) ?? 0);
    let striker,nonStrikername;
    if(value == 1 || value == 5 || value == 3){

    }
    let obj = {
      teamId: this.activeRouteId,
      bowler: {
        name:this.records.player_record[0].bowler,
        overs:4,
        maiden:1,
        wicket:1
      },
      batsman: [
        {
          Strikername: this.records.player_record[0].batsman1,
          '4': value == 4 ? 4 : null,
          '6': value == 6 ? 6 : null
        },
        {
          nonStrikername: this.records.player_record[0].batsman1,
          '4': value == 4 ? 4 : null,
          '6': value == 6 ? 6 : null
        }
      ],
      ball_count: `${(this.round(this.ballRecords?.overs?.length / 6) + '.' + this.round(this.ballRecords?.overs?.length % 6))}` ?? 0,
      runs: sum,
      extraRuns: this.extraRuns
    }
    this.apiService.ballValue(obj).subscribe(res => {
      console.log(res);
      this.getBallRecords();
      this.extraRuns = {};
      this.extraRecords = false;
      console.log(this.extraRuns)
    })
  }
  getBallRecords() {
    this.apiService.getBallRecords(this.activeRouteId).subscribe(res => {
      this.ballRecords = { ...res[0] };
    })
  }
}
