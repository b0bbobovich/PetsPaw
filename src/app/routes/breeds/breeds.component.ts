import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../api/services/api.service';
import { ShareRouteDataService } from '../../api/services/share-route-data.service';
import { Breeds } from '../../api/models/breeds.model';
import { Category } from '../../api/models/category.model';




@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css', '../../components/shared/grid-container/grid-container.component.css']
})
export class BreedsComponent implements OnInit {

  public loadedData: Breeds[] = [];

  public showedData: Breeds[] = [];

  public categories: Category[] = [];

  public currentCategory: string = 'All breeds'

  public imgsLimit: number = 20;

  public isLimitDropdownOpen: boolean = false;
  public isCategoriesDropdownOpen: boolean = false;

  constructor(private service: ApiService, private shareDataService: ShareRouteDataService) {
    this.searchData();
    this.searchCategories();
  }

  ngOnInit(): void { }
  
  @ViewChild('dropdown_breeds') dropdown_breeds!: ElementRef;

  @ViewChild('dropdown_limit') dropdown_limit!: ElementRef;

  public searchData(): void {
    // To show progressSpinner - loadedData must be empty
    if (this.loadedData) {
      this.loadedData = [];
    }
    if (this.currentCategory == 'All breeds') {
      this.service.searchAllPublic().subscribe((catsData) => {
        this.loadedData = catsData.filter((el: Breeds) => typeof(el) !== 'undefined');
        this.showData();
      });
    }
    else {
      let category = this.categories.filter((el: Category) => (el.name == this.currentCategory));
      let breedID = category[0].id;
      this.service.searchByBreed(breedID).subscribe((breed_data) => {
        this.loadedData = breed_data;
        this.showData();
      });
    }
  }

  public showData(): void {
    console.log(this.loadedData)
    this.showedData = this.loadedData.slice(0, this.imgsLimit);
  }

  public searchCategories(): void {
    this.service.searchCategories().subscribe((categoriesData) => {
      this.categories = categoriesData;
    });
  }

  public chooseCategory(category: Category | string): void {
    if (typeof category == 'string') {
      this.currentCategory = 'All breeds';
    }
    else {
      this.currentCategory = category.name;
    }
    this.openCloseDropbars('categoriesDropbar')
    this.searchData();
  }

  public filterByLimits(limit: number): void {
    this.imgsLimit = limit;
    this.openCloseDropbars('limitDropbar')
    this.showData();
  }
  // share specific cat data to 'Info' route
  public shareData(catData: Breeds) {
    this.shareDataService.data.push(catData);
  }

  public openCloseDropbars(dropbar: string): void {
    if (dropbar == 'limitDropbar') {
      this.isLimitDropdownOpen = !this.isLimitDropdownOpen;
    }
    if (dropbar == 'categoriesDropbar') {
      this.isCategoriesDropdownOpen = !this.isCategoriesDropdownOpen;
    }
  }

  public clickedOutsideDropbars(dropbar: string): void {
    if (dropbar == 'limitDropbar') {
      this.isLimitDropdownOpen = false;
    }
    if (dropbar == 'categoriesDropbar') {
      this.isCategoriesDropdownOpen = false;
    }
  }

  public sort(order: string): void {
    if (order == 'descending') {
      this.showedData = this.loadedData
      .slice(0, this.imgsLimit)
      .sort((a, b) => (a.breeds[0].name > b.breeds[0].name ? -1 : 1));
    }
    if (order == 'ascending') {
      this.showedData = this.loadedData
      .slice(0, this.imgsLimit)
      .sort((a, b) => (a.breeds[0].name < b.breeds[0].name ? -1 : 1));
    }
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
