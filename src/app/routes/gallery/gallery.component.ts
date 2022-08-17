import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Breeds } from '../../api/models/breeds.model';
import { Category } from '../../api/models/category.model';
import { ApiService } from '../../api/services/api.service';
import { PersistanceService } from '../../api/services/persister.service';
import { UploadFileService } from '../../api/services/upload-file.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css', '../../components/shared/grid-container/grid-container.component.css']
})
export class GalleryComponent implements OnInit {

  public subID: string = ''; 

  public loadedData: Breeds[] = [];

  public showedData: Breeds[] = [];

  public categories: Category[] = [];

  public currentOrder: string = 'Random';
  public isOrderDropdownOpen: boolean = false;

  public currentType: string = 'All';
  public searchingTypes: string = 'jpg,png,gif';
  public isTypeDropdownOpen: boolean = false;
  
  public currentBreed: string = 'All breeds';
  public isBreedDropdownOpen: boolean = false;

  public currentLimit: number = 20;
  public isLimitDropdownOpen: boolean = false;

  public isEmptyData: boolean | undefined = undefined;

  public isFavourite: boolean = false;
  public isBtnReady: boolean = true;

  public isUploadMenuVisible: boolean = false;

  public fileToUpload!: File;
  public fileURL: string | null | ArrayBuffer = null;
  public fileName: string = '';

  constructor(private service: ApiService, private persister: PersistanceService, private fileUploadService: UploadFileService) { }

  ngOnInit(): void {
    this.createSubID();
    this.searchCategories();
    this.searchData();
  }

  public createSubID(): void {
    // sub_id can be any value. Its static and didn`t change with new session
    this.persister.set('sub_id', 'id369432');
    this.subID = this.persister.get('sub_id');
  };

  public searchData(): void {
    // To show progressSpinner - loadedData must be empty
    if (this.loadedData) {
      this.loadedData = [];
    }
    if (this.currentBreed == 'All breeds') {
      this.service.searchByImgType(this.searchingTypes, this.subID).subscribe((catsData) => {
        this.loadedData = catsData.filter((el: Breeds) => typeof (el) !== 'undefined');
        this.showData();
      });
    }
    else {
      let category = this.categories.filter((el: Category) => (el.name == this.currentBreed));
      let breedID = category[0].id;
      this.service.searchByBreedAndByImgType(breedID, this.searchingTypes, this.subID).subscribe((breed_data) => {
        this.loadedData = breed_data;
        this.showData();
      });
    }
  }

  public showData(): void {
    if (this.loadedData && (this.currentLimit > this.loadedData.length)) {
      this.currentLimit = this.loadedData.length;
    }
    else if (this.loadedData && (this.currentLimit === 0)) { 
      this.currentLimit = this.loadedData.length;
    };
    this.showedData = this.loadedData.slice(0, this.currentLimit);
    if (this.showedData.length === 0) {
      this.isEmptyData = true;
    }
    else {
      this.isEmptyData = false;
    };
    console.log(this.showedData);
  }

  public searchCategories(): void {
    this.service.searchCategories().subscribe((categoriesData) => {
      this.categories = categoriesData;
    });
  }

  public openUploadMenu() {
    this.isUploadMenuVisible = true;
  }

  public closeUploadMenu() {
    this.isUploadMenuVisible = false;
  }

  public clickedOutsideDropbars(dropbar: string): void {
    if (dropbar === 'orderDropbar') {
      this.isOrderDropdownOpen = false;
    }
    else if (dropbar === 'typeDropbar') {
      this.isTypeDropdownOpen = false;
    }
    else if (dropbar === 'breedDropbar') {
      this.isBreedDropdownOpen = false;
    }
    else {
      this.isLimitDropdownOpen = false;
    };
  };
  
  public openCloseDropbars(dropbar: string): void {
    if (dropbar === 'orderDropbar') {
      this.isOrderDropdownOpen = !this.isOrderDropdownOpen;
    }
    else if (dropbar === 'typeDropbar') {
      this.isTypeDropdownOpen = !this.isTypeDropdownOpen;
    }
    else if (dropbar === 'breedDropbar') {
      this.isBreedDropdownOpen = !this.isBreedDropdownOpen;
    }
    else {
      this.isLimitDropdownOpen = !this.isLimitDropdownOpen;
    };
  };

  public changeOrder(newOrder: string): void {
    this.currentOrder = newOrder;
    if (newOrder == 'Desc') {
      this.showedData = this.loadedData
      .slice(0, this.currentLimit)
      .sort((a, b) => (a.breeds[0].name > b.breeds[0].name ? -1 : 1));
    }
    else if (newOrder == 'Asc') {
      this.showedData = this.loadedData
      .slice(0, this.currentLimit)
      .sort((a, b) => (a.breeds[0].name < b.breeds[0].name ? -1 : 1));
    }
    else {
      this.showedData = shuffle(this.loadedData)
      .slice(0, this.currentLimit)
    };
    this.isOrderDropdownOpen = false;

    function shuffle(array: Breeds[]) {
      let currentIndex = array.length,  randomIndex: number;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    };
  };

  public changeType(newType: string): void {
    this.currentType = newType;
    if (newType === 'Static') {
      this.searchingTypes = 'jpg,png';
    }
    else if (newType === 'Animated') {
      this.searchingTypes = 'gif';
    }
    else {
      this.searchingTypes = 'jpg,png,gif';
    }
    this.isTypeDropdownOpen = false;
    this.searchData();
  }

  public chooseCategory(category: Category | string): void {
    if (typeof category == 'string') {
      this.currentBreed = 'All breeds';
    }
    else {
      this.currentBreed = category.name;
    }
    this.isBreedDropdownOpen = false;
    this.searchData();
  }

  public changeLimit(newLimit: number): void {
    this.currentLimit = newLimit;
    this.showData();
    this.isLimitDropdownOpen = false;
  }

  public on_hover_enter(img_data: Breeds) {
    if (img_data.hasOwnProperty('favourite')) {
      this.isFavourite = true;
    }
    else {
      this.isFavourite = false;
    };
  }

  public favourite_img(imgData: Breeds) {
    this.isBtnReady = false;
    if (imgData.hasOwnProperty('favourite')) {
      let imgFavID = imgData['favourite']!.id;
      this.service.delFavourite(imgFavID).subscribe((res) => {
        if (res['message'] == 'SUCCESS') {
          let currentImg = this.loadedData.filter((el: Breeds) => (el.id === imgData.id))[0];
          delete currentImg.favourite;
          this.isFavourite = false;
          console.log(`Image ${imgFavID} successfully deleted from favourite`);
        }
        else {
          console.error(`Image ${imgFavID} not deleted from favourite`);
        };
      });
      this.isBtnReady = true;
    }
    else {
      let imgID = imgData.id;
      this.service.postFavourite(imgID, this.subID).subscribe((res) => {
        if (res['message'] === 'SUCCESS') {
          let favID = res['id'];
          let currentImg = this.loadedData.filter((el: Breeds) => (el.id === imgData.id))[0];
          currentImg['favourite'] = { 'id': favID };
          let currentImgIndex = this.loadedData.indexOf(currentImg);
          this.loadedData[currentImgIndex] = currentImg;
          this.isFavourite = true;
          console.log(`Image ${imgID} successfully posted to favourite`);
        }
        else {
          console.error(`Image ${imgID} not posted to favourite`);
        };
      });
      this.isBtnReady = true;
    };
  }

  public handleFileInput(event: any) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
      reader.readAsDataURL(this.fileToUpload);
      this.fileName = event.target.files[0].name;
      reader.onload = () => {
        this.fileURL = reader.result; 
      };
    }
    
  }

  public uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload!).subscribe(data => {
      let response = data;
      }, error => {
        console.log(error);
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

