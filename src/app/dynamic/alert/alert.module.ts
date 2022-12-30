import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { PlaceHolderDirective } from './place-holder.directive';

@NgModule({
  declarations: [AlertComponent, PlaceHolderDirective],
  imports: [CommonModule],
  exports: [AlertComponent, PlaceHolderDirective],
})
export class AlertModule {}
