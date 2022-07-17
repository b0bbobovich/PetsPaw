import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsComponent } from './breeds.component';


@NgModule({
  declarations: [
    BreedsComponent
  ],
  imports: [
    CommonModule,
    BreedsRoutingModule,
    SharedModule
  ]
})
export class BreedsModule { }
