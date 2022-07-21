import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.service.searchBreedByName(this.searchWord).subscribe((breed_res) => {
      if (breed_res.length > 0) {
        this.breedId = breed_res[0].id;
      
        console.log(this.breedId);
        this.service.searchBreedImages(this.breedId).subscribe((all_breeds_res) => {
          this.loadedData = all_breeds_res;
          console.log(this.loadedData);
        });
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
