import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertModule } from '../dynamic/alert/alert.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AlertModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [],
})
export class AuthModule {}
