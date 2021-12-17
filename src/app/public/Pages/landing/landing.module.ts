import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderModule } from '../../common/header/header.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, HeaderModule],
  exports: [LandingComponent],
})
export class LandingModule {}
