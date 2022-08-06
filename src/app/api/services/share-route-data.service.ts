import { Injectable } from '@angular/core';
import { Breed } from '../models/breed.model';
import { Breeds } from '../models/breeds.model';


@Injectable({
  providedIn: 'root'
})
export class ShareRouteDataService {

  public data: Breeds[] = [];

  constructor() { }


}
