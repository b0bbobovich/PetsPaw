import { Component, OnInit } from '@angular/core';
import { Breeds } from '../../api/models/breeds.model';
import { ApiService } from '../../api/services/api.service';
import { PersistanceService } from '../../api/services/persister.service';
import { LoggedData } from './voting.interface';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  public isNextImg: boolean = true;

  public loadedData: Breeds[] = [];

  public imageID: string = '';

  public subID: string = '';

  public isNewAction: boolean = false;

  public isFavourite: boolean = false;

  public loggedData: LoggedData = {
    imageID: '',
    action: '',
    place: '',
    currentTime: '',
  }

  public fav_class: string = '';
  public fav_cont_class: string = '';

  constructor(private service: ApiService, private persister: PersistanceService) {
    this.createSubID();
    this.searchImage();
  }

  ngOnInit(): void { }
  
  public createSubID(): void {
    let randomNum = Math.floor(Math.random() * 10000) + 1;
    this.persister.set('sub_id', randomNum);
  }

  public searchImage(): void {
  this.service.searchVoteImage().subscribe((catData) => {
    this.loadedData = catData;
    this.imageID = this.loadedData[0].id;
  });
  }

  public clickedFav(): void {}

  public loggedAction(action: string, page: string): void {
    this.isNewAction = !this.isNewAction;

    let time = new Date();
    let current_time = `${time.getHours()} : ${(time.getMinutes()<10?'0':'') + time.getMinutes()}`;
    
    this.loggedData['imageID'] = this.imageID;
    this.loggedData['action'] = action;
    this.loggedData['place'] = page;
    this.loggedData['currentTime'] = current_time;
   }

}
