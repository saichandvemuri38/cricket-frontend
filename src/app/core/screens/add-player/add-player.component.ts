import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  public batsman1 = null;
  public batsman2 = null;
  public bowler = null;
  constructor(public route: ActivatedRoute,public apiService:ApiService,public router:Router) { }
  ngOnInit(): void {
  }
  public submit() {
    let activeRouteId ;
    this.route.queryParams.subscribe(param=>{activeRouteId = param['item_id']});
    let obj = {
      _id:activeRouteId,
      batsman1: this.batsman1,
      batsman2: this.batsman2,
      bowler: this.bowler
    }
    console.log(obj);
    this.apiService.addPlayer(obj).subscribe(res=>{
      console.log(res);
      this.router.navigate(['score-board'], { queryParams:{item_id:activeRouteId}});
    })
  }
}
