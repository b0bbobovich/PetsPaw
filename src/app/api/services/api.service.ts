import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from '../../../environments/environment';
import { Breed } from '../models/breed.model';
import { Breeds } from '../models/breeds.model';
import { Category } from '../models/category.model';
import { Favourite } from '../models/favourite.model'
import { Vote } from '../models/vote.model'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public searchBreedByName(searchWord: string): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${environment.apiURL}/breeds/search/?q=${searchWord}`);
  }

  public searchAllPublic(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?limit=20&has_breeds=true&format=json`);
  }

  public searchByBreed(breedId: string): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?limit=20&has_breeds=true&breed_id=${breedId}`);
  }

  public getImageById(image_id: string): Observable<Breeds> {
    return this.http.get<Breeds>(`${environment.apiURL}/images/${image_id}?format=json`);
  }

  public searchCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiURL}/breeds?page=0`); 
  }

  public searchVotingImage(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?limit=1&has_breeds=true&format=json`);
  }

  public getFavourites(sub_id: string): Observable<Favourite[]> {
    return this.http.get<Favourite[]>(`${environment.apiURL}/favourites?limit=20&sub_id=${sub_id}`);
  }

  public postFavourite(image_id: string, sub_id: string): Observable<any> {
    return this.http.post(`${environment.apiURL}/favourites`, {'image_id': image_id, 'sub_id': sub_id});
  }

  public delFavourite(favourite_id: string): Observable<any> {
    return this.http.delete(`${environment.apiURL}/favourites/${favourite_id}`);
  }

  public getVotes(sub_id: string): Observable<Vote[]> {
    return this.http.get<Vote[]>(`${environment.apiURL}/votes?limit=20&sub_id=${sub_id}`);
  }

  public postVote(image_id: string, sub_id: string, value: number): Observable<any> {
    return this.http.post(`${environment.apiURL}/votes`, {'image_id': image_id, 'sub_id': sub_id, 'value': value});
  }

  public delVote(vote_id: string): Observable<any> {
    return this.http.delete(`${environment.apiURL}/votes/${vote_id}`);
  }


  
}
