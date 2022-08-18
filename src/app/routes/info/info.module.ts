import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';




@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SharedModule,
    
  ],
})
export class InfoModule { }

