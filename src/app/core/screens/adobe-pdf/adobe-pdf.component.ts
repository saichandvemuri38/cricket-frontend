import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-adobe-pdf',
  templateUrl: './adobe-pdf.component.html',
  styleUrls: ['./adobe-pdf.component.scss']
})
export class AdobePdfComponent implements OnInit {
  public feedback;
  public output = [];
  public userName;
  public message;
  constructor(public apiService: ApiService) {

  }
  ngOnInit(): void {
    this.apiService.listen('typing').subscribe((data) => this.updateFeedback(data));
    this.apiService.listen('chat').subscribe((data) => this.updateMessage(data));
  }
  public updateMessage(data){
    this.feedback = "";
    if(!!!data) return;
    this.output.push(data);

  }
  public updateFeedback(data) {
    this.feedback = `${data} is typing a message`;
  }
  public messageTyping(){
    this.apiService.emit('typing',this.userName)
  }
  public sendMessage(){
    this.apiService.emit('chat',{
      message:this.message,
      handle:this.userName
    });
    this.message="";
  }
}
