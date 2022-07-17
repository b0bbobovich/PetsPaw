import { Component } from '@angular/core';
import { ApiService } from './api/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetsPaw';

  constructor(private service: ApiService) {}

}
