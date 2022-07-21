import { Component, Input, OnInit } from '@angular/core';
import { Breeds } from '../../../api/models/breeds.model';

@Component({
  selector: 'app-cat-breed',
  templateUrl: './cat-breed.component.html',
  styleUrls: ['./cat-breed.component.css']
})
export class CatBreedComponent implements OnInit {

  @Input() breeds!: Breeds

  constructor() { }

  ngOnInit(): void {
  }

}
