import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  public activeId: any;
  public records: any;
  constructor(public apiService: ApiService, public route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.getRecords();
  }




  getRecords() {
    let activeRouteId;
    this.route.queryParams.subscribe(param => { activeRouteId = param['item_id'] });
    this.apiService.records(activeRouteId).subscribe(res => {
      this.records = { ...res[0] };
      console.log(this.records);
    })
  }

}
