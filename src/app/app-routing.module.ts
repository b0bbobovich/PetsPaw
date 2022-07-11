import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VotingComponent } from './routes/voting/voting.component';
import { BreedsComponent } from './routes/breeds/breeds.component';
import { GalleryComponent } from './routes/gallery/gallery.component';


const routes: Routes = [
  {
    path: 'voting', component: VotingComponent
  },
  
  {
    path: 'breeds', component: BreedsComponent
  },

  {
    path: 'gallery', component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
