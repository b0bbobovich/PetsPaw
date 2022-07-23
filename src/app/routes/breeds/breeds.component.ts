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

  public categories: CatsBreeds[] = [];

  public currentCategory: string = 'All breeds'

  public imgsLimit: number = 10;

  public isLimitDropdownOpen: boolean = false;
  public isCategoriesDropdownOpen: boolean = false;

  constructor(private service: ApiService) {
    this.searchData();
    this.searchCategories();
  }

  ngOnInit(): void { }
  
  @ViewChild('dropdown_breeds') dropdown_breeds!: ElementRef;

  @ViewChild('dropdown_limit') dropdown_limit!: ElementRef;

  public searchData(): void {
    // To show progressSpinner - loadedData must be be empty
    if (this.loadedData) {
      this.loadedData = [];
    }

    if (this.currentCategory == 'All breeds') {
      this.service.searchCatsImages().subscribe((cats_data) => {
        this.loadedData = cats_data;
        this.showData();
      });
    }
    else {
      let category = this.categories.filter((el: CatsBreeds) => (el.name == this.currentCategory));
      let categoryID = category[0].id
      this.service.searchBreedImages(categoryID).subscribe((breed_data) => {
        this.loadedData = breed_data;
        this.showData();
      });
    }
    
  }

  public showData(): void {
    if (this.imgsLimit > this.loadedData.length) {
      this.imgsLimit = this.loadedData.length;
    }
    this.showedData = this.loadedData.slice(0, this.imgsLimit);
  }

  public searchCategories(): void {
    this.service.searchBreeds().subscribe((categories) => {
      this.categories = categories;
    });
  }

  public chooseCategory(category: CatsBreeds | string): void {
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




  // public searchDefaultData(): void {
  //   // To show progressSpinner - loadedData must be be empty
  //   this.loadedData = [];
  //   // hiding breeds dropbar when loading all breeds 
  //   this.isDropdownBreedsOpen = false;
  //   this.service.searchCatsImages().subscribe((all_breeds_res) => {
  //     this.loadedData = all_breeds_res;
  //     this.showedData = this.loadedData.slice(0, this.limit_imgs);
  //     if (this.limit_imgs > this.loadedData.length) {
  //       this.limit_imgs = this.loadedData.length;
  //     }
  //   });
  // }

  // public searchCatsByBreed(breed: string): void {
  //   this.dropdownBreeds();
  //   this.loadedData = [];
  //   this.service.searchBreedImages(breed).subscribe((breed_res) => {
  //     this.loadedData = breed_res;
  //     this.showedData = this.loadedData.slice(0, this.limit_imgs);
  //   })
  //   }

  // public searchCatsBreeds(): void {
  //   this.service.searchBreeds().subscribe((breeds_names) => {
  //     this.categories = breeds_names;
  //   });
  // }

  // public reload_data(): void {
  //   let category = this.getCurrentCategory()
  //   if (category == 'All breeds') {
  //     this.searchDefaultData();
  //   }
  //   else {
  //     this.searchCatsByBreed(category);
  //   }
  // }



  // toDo think about more beatiful realisation of code below)) don`t have time for it
  // public dropdownBreeds(): void {
  //   this.isDropdownBreedsOpen = !this.isDropdownBreedsOpen;
    
  // }
  // // needed for appClickedOutside directive same as clickedOutsideLimit
  // public clickedOutsideBreeds(): void {
  //   this.isDropdownBreedsOpen = false;
  // }

  // public dropdownLimit(): void {
  //   this.isDropdownLimitOpen = !this.isDropdownLimitOpen;
  // }

  // public clickedOutsideLimit(): void {
  //   this.isDropdownLimitOpen = false
  // }


  // public show_limit_imgs(new_limit: number): void {
  //   this.limit_imgs = new_limit;
  //   this.showedData = this.loadedData.slice(0, this.limit_imgs);
  //   this.dropdownLimit();
  // }

  // public descSort(): void {
  //   this.showedData = this.loadedData
  //     .slice(0, this.limit_imgs)
  //     .sort((a, b) => (a.breeds[0].name > b.breeds[0].name ? -1 : 1));
  // }

  // public ascSort(): void {
  //   this.showedData = this.loadedData
  //     .slice(0, this.limit_imgs)
  //     .sort((a, b) => (a.breeds[0].name < b.breeds[0].name ? -1 : 1));
  // }

  // public getCurrentCategory(): string {
  //   console.log(this.showedData)
  //   if (this.isCategorised()) {
  //     return this.showedData[0].breeds[0].name
  //   }
  //   else {
  //     return 'All breeds'
  //   }
  // }

  // public isCategorised(): boolean {
  //   let check_res = false;
  //   if (this.showedData.length > 1) {
  //     if (this.showedData[0].breeds[0].name == this.showedData[1].breeds[0].name) {
  //       check_res = true;
  //     }
  //   }
  //   else {
  //     check_res = true;
  //   }
  //   return check_res;
  // }

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
