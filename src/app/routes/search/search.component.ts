import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breed } from '../../api/models/breed.model';
import { Breeds } from '../../api/models/breeds.model';
import { ApiService } from '../../api/services/api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../../components/shared/grid-container/grid-container.component.css']
})
export class SearchComponent implements OnInit {

  public searchWord: string = "";

  public loadedData: Breeds[] = [];

  public breedId: string = ''

  public isEmptyData: boolean = true

  constructor(private route: ActivatedRoute, private service: ApiService) {
      this.route.firstChild?.params.subscribe((res) => {
        this.searchWord = res["searchWord"];
        this.loadedData = [];
        this.search();
    });
  }

  ngOnInit(): void {
  }

  public search(): void {
    this.service.searchBreedByName(this.searchWord).subscribe((breedByName) => {
      if (breedByName.length > 0) {
        this.breedId = breedByName[0].id;
      
        this.service.searchByBreed(this.breedId).subscribe((breedRes) => {
          this.loadedData = breedRes;
          this.isEmptyData = false
        });
      }
      else {
        this.isEmptyData = true
      }
    });
  }


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
