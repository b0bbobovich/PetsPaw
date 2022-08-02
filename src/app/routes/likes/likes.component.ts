import { Component, OnInit } from '@angular/core';
import { Vote } from '../../api/models/vote.model';
import { ApiService } from '../../api/services/api.service';
import { PersistanceService } from '../../api/services/persister.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css', '../../components/shared/grid-container/grid-container.component.css']
})
export class LikesComponent implements OnInit {

  public subID: string = '';

  public loadedData: Vote[] = [];

  public imageID: string = '';

  constructor(private service: ApiService, private persister: PersistanceService) {
    this.subID = this.persister.get('sub_id');
    this.getLikedImgs();
  }

  ngOnInit(): void {
  }

  public getLikedImgs(): void {
    this.service.getVotes(this.subID).subscribe((res) => {
      console.log(res)
      this.loadedData = res.filter((el: Vote) => el.value === 1);
    });
  };



    // toDo move get_grid_class to grid-container component and then import where it needed to
    public get_grid_class(index: number): string {
      const pattern = [
        'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'elv', 'twf', 'thrt', 'frt', 'fvt',
        'sxt', 'svt', 'eigt', 'nt', 'twt'
      ];
      let clamped_index = index % pattern.length;
      return pattern[clamped_index];
    }

}
