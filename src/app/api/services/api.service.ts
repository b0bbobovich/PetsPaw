import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from '../../../environments/environment';
import { Breed } from '../models/breed.model';
import { Breeds } from '../models/breeds.model';
import { CatsBreeds } from '../models/cats-breeds.model';
import { Favourites } from '../models/favourites.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public searchBreedByName(searchWord: string): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${environment.apiURL}/breeds/search/?q=${searchWord}`);
  }

  public searchBreedImages(breedId: string): Observable<Breeds[]> {
    // https://documenter.getpostman.com/view/5578104/RWgqUxxh#997f5b37-79cc-49a4-8c11-ddf24b72a4d9
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?limit=20&has_breeds=true&breed_id=${breedId}`);
  }

  public searchCatsImages(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?limit=20&has_breeds=true&format=json}`);
  }

  public searchCatById(image_id: string): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search${image_id}&format=json}`);
  }

  public searchBreeds(): Observable<CatsBreeds[]> {
    return this.http.get<CatsBreeds[]>(`${environment.apiURL}/breeds?page=0}`);
  }
  
  public searchVoteImage(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?limit=1&has_breeds=true&format=json}`);
  }

  public getFavImg(favourite_id: string, sub_id: string): Observable<Favourites[]> {
    return this.http.get<Favourites[]>(`${environment.apiURL}/favourites/${favourite_id}?sub_id=${sub_id}}`);
  }

  public deleteFavImg(favourite_id: string, sub_id: string): void {
    this.http.delete(`${environment.apiURL}/favourites${favourite_id}?sub_id=${sub_id}}`);
  }

  public postFavImg(image_id: string, sub_id: string): void {
    this.http.post(`${environment.apiURL}/favourites?sub_id=${sub_id}}`, image_id);
  }

  public getAllFavImgs(sub_id: string): Observable<Favourites[]> {
    return this.http.get<Favourites[]>(`${environment.apiURL}/favourites?sub_id=${sub_id}}`);
  }
}
