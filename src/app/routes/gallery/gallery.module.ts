import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule
  ]
})
export class GalleryModule { }
