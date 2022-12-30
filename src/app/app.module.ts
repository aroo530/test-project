import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemporaryComponent } from './temporary/temporary.component';
import { LogComponent } from './temporary/log/log.component';
import { ShortPipe } from './short.pipe';
import { HttpComponent } from './http/http.component';
import { AuthInterceptorService } from './http/auth-interceptor.service';
import { LoggingInterceptorService } from './http/logging-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AnimationsComponent } from './animations/animations.component';

import { AuthModule } from './auth/auth.module';
import { AlertModule } from './dynamic/alert/alert.module';
import { AppRoutingModule } from './app-routing.module';

import { QuillComponent } from './quill/quill.component';
import { QuillModule } from 'ngx-quill';
import { QuillConfigModule } from 'ngx-quill/config';

@NgModule({
  declarations: [
    ShortPipe,
    AppComponent,
    CoursesComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    TemporaryComponent,
    LogComponent,
    HttpComponent,
    HeaderComponent,
    DirectiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AnimationsComponent,
    QuillComponent,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    AlertModule,
    BrowserAnimationsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],
        ],
      },
    }),
    QuillConfigModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],
        ],
      },
    }),
  ],
  providers: [
    // Add the interceptor to the providers array.
    // The order of the interceptors is important.
    // The interceptors are executed in the order they are added to the providers array.
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  // for angular 8 and lower
  // entryComponents: [AlertComponent],
})
export class AppModule {}
