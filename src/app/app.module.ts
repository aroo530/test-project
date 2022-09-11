import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { TemporaryComponent } from './temporary/temporary.component';
import { LogComponent } from './temporary/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    TemporaryComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
