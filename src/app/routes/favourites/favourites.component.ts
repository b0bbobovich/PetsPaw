import { Component, OnInit } from '@angular/core';
import { Breeds } from '../../api/models/breeds.model';
import { Favourites } from '../../api/models/favourites.model';
import { ApiService } from '../../api/services/api.service';
import { PersistanceService } from '../../api/services/persister.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css', '../../components/shared/grid-container/grid-container.component.css']
})
export class FavouritesComponent implements OnInit {

  public subID: string = '';

  public loadedData: Breeds[] = [];

  constructor(private service: ApiService, private persister: PersistanceService) {
    this.subID = this.persister.get('sub_id');
    this.searchFavImgs();
  }

  ngOnInit(): void {}

  public searchFavImgs(): void {
    this.service.getAllFavImgs(this.subID).subscribe((favImgs) => {
      let favData = favImgs.filter((el: Favourites) => {el.sub_id == this.subID});
      for (let favCat of favData) {
        this.service.searchCatById(favCat.image_id).subscribe((cat_data) => {
          this.loadedData.push(cat_data[0]);
          console.log(cat_data)
          console.log(this.loadedData)
        });
      }
    });
  }

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
