import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../api/services/api.service';
import { Breeds } from '../../api/models/breeds.model';
import { CatsBreeds } from '../../api/models/cats-breeds.model';


@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css', '../../components/shared/grid-container/grid-container.component.css']
})
export class BreedsComponent implements OnInit {

  public loadedData: Breeds[] = [];

  public showedData: Breeds[] = [];

  public breeds: CatsBreeds[] = [];

  public limit_imgs: number = 10;
  public isDropdownLimitOpen: boolean = false;
  public isDropdownBreedsOpen: boolean = false;

  constructor(private service: ApiService) {
    this.searchDefaultData();
    this.searchCatsBreeds();
  }

  ngOnInit(): void {}

  public searchDefaultData(): void {
    // To show progressSpinner - loadedData must be be empty
    this.loadedData = [];
    // hiding breeds dropbar when loading all breeds 
    this.isDropdownBreedsOpen = false;

    this.service.searchCats().subscribe((all_breeds_res) => {
      this.loadedData = all_breeds_res;
      this.showedData = this.loadedData.slice(0, this.limit_imgs);
    });
  }

  public searchCatsBreeds(): void {
    this.service.searchBreeds().subscribe((breeds_names) => {
      this.breeds = breeds_names;
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

  @ViewChild('dropdown_breeds') dropdown_breeds!: ElementRef;
  @ViewChild('dropdown_limit') dropdown_limit!: ElementRef;

  // toDo think about more beatiful realisation of code below)) don`t have time for it

  public dropdownBreeds(): void {
    this.isDropdownBreedsOpen = !this.isDropdownBreedsOpen;
  }
  // needed for appClickedOutside directive same as clickedOutsideLimit
  public clickedOutsideBreeds(): void {
    this.isDropdownBreedsOpen = false;
  }

  public dropdownLimit(): void {
    this.isDropdownLimitOpen = !this.isDropdownLimitOpen;
  }

  public clickedOutsideLimit(): void {
    this.isDropdownLimitOpen = false;
  }

  public show_limit_imgs(new_limit: number): void {
    this.limit_imgs = new_limit;
    this.showedData = this.loadedData.slice(0, this.limit_imgs);
    this.dropdownLimit();
  }

  public showBreed(breed: string): void {
    this.dropdownBreeds();
    this.loadedData = [];
    this.service.searchBreedImages(breed).subscribe((breed_res) => {
      this.loadedData = breed_res;
      this.showedData = this.loadedData.slice(0, this.limit_imgs);
    })
  }

  public sort(order: string): void {
    if (order == 'descend') {
      this.showedData = this.loadedData.sort().reverse();
      
    }
    if (order == 'acsend') {
      this.showedData = this.loadedData.sort();
    }
  }

}
