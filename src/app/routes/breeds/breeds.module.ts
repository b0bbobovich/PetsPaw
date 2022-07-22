import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';
import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsComponent } from './breeds.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';


@NgModule({
  declarations: [
    BreedsComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    BreedsRoutingModule,
    SharedModule
  ]
})
export class BreedsModule { }
