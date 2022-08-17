import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';

import { IgxCarouselModule } from 'igniteui-angular';
import { DOCUMENT } from '@angular/common';
import { EVENT_MANAGER_PLUGINS, HammerGestureConfig, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, ɵHammerGesturesPlugin } from '@angular/platform-browser';



@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SharedModule,
    IgxCarouselModule,
    
    
  ],
  providers: [
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: ɵHammerGesturesPlugin,
      multi: true,
      deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, [new Optional(), HAMMER_LOADER]]
    },

    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
      deps: []
    }
  ]
})
export class InfoModule { }

