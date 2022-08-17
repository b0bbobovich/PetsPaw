import { Component, OnInit } from '@angular/core';
import { Breeds } from '../../api/models/breeds.model';
import { Favourite } from '../../api/models/favourite.model';
import { ApiService } from '../../api/services/api.service';
import { PersistanceService } from '../../api/services/persister.service';
import { LoggedData } from './voting.interface';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  public loadedData: Breeds[] = [];

  public imageID: string = '';

  public subID: string = '';
  
  public favouriteID: string = '';

  public logs: LoggedData[] = [];

  public isFavourite: boolean = false;
  public isBtnReady: boolean = true;

  
  constructor(private service: ApiService, private persister: PersistanceService) {
    this.createSubID();
    this.searchImage();
  };

  ngOnInit(): void { }
  
  public createSubID(): void {
    // sub_id can be any value. Its static and didn`t change with new session
    this.persister.set('sub_id', 'id369432');
    this.subID = this.persister.get('sub_id');
  };

  public searchImage(): void {
    this.service.searchVotingImage().subscribe((catData) => {
      this.loadedData = catData;
      this.imageID = this.loadedData[0].id;
    });
  };

  public onFavBtnClicked(): void {
    this.checkFavouriteBtnState()
    if (this.isFavourite) {
      this.service.delFavourite(this.favouriteID).subscribe((res) => {
        if (res['message'] == 'SUCCESS') {
          this.loggedAction('removed from', 'Favourites');
          this.isFavourite = false;
          console.log(this.isFavourite);
        }
      });
    }
    else {
      this.service.postFavourite(this.imageID, this.subID).subscribe((res) => {
        if (res['message'] === 'SUCCESS') {
          this.loggedAction('added to', 'Favourites');
          this.favouriteID = res["id"];
          this.isFavourite = true;
          console.log(this.isFavourite)
        }
      });
    };
    this.isBtnReady = true;
  };
  
  // TODO pipes or async await
  public  checkFavouriteBtnState(): void {
    this.isBtnReady = false;
    this.service.getFavourites(this.subID).subscribe((res) => {
      let favouritesImgID = res.map((el: Favourite) => el.image_id);
      this.isFavourite = favouritesImgID.includes(this.imageID);
    });
  };

  public onVoteBtnClicked(value: number) {
    this.service.postVote(this.imageID, this.subID, value).subscribe((res) => {
      if (res['message'] === 'SUCCESS') {
        if (value === 1) {
          this.loggedAction('added to', 'Likes');
        }
        else {
          this.loggedAction('added to', 'Dislikes');
        }
        this.loadedData = []
        this.searchImage()
      }
    });
  };

  public loggedAction(action: string, page: string): void {    
    let log: LoggedData = {
      imageID: '',
      action: '',
      place: '',
      currentTime: '',
    };

    let time = new Date();
    let current_time = `${time.getHours()} : ${(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}`;
    
    log['imageID'] = this.imageID;
    log['action'] = action;
    log['place'] = page;
    log['currentTime'] = current_time;
    console.log(`New Action: ${action} ${page}`);

    this.logs.push(log);
  };
}
