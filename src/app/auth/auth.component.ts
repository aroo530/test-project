import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AlertComponent } from '../dynamic/alert/alert.component';
import { PlaceHolderDirective } from '../dynamic/alert/place-holder.directive';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  // error: string = '';
  isLoginMode = true;
  closeSub: Subscription = new Subscription();
  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost!: PlaceHolderDirective;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  passwordValidator = [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
  ];
  singnupForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', this.passwordValidator],
  });

  async onSubmit() {
    // console.log(this.singnupForm.value);
    // this.error = '';
    const email = String(this.singnupForm.value.email);
    const password = String(this.singnupForm.value.password);
    if (password && email && this.singnupForm.valid) {
      try {
        if (this.isLoginMode) {
          await this.authService.login(email, password);
          this.router.navigate(['/']);
        } else {
          await this.authService.signup(email, password);
          this.isLoginMode = true;
        }
      } catch (error: any) {
        console.log(error);
        this.showError(error.error.msg);
        // this.error = error.error.msg;
      }
    }
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onCloseAlert() {}

  private showError(error: string) {
    // console.log(error);
    console.log(this.alertHost);

    const hostViewContainerRef = this.alertHost.viewContainerRef;

    hostViewContainerRef.clear();

    const alertRef =
      hostViewContainerRef.createComponent<AlertComponent>(AlertComponent);

    alertRef.instance.message = error;

    this.closeSub = alertRef.instance.close.pipe(take(1)).subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });

    // alertRef.instance.close.emit(hostViewContainerRef.clear());
  }
  ngOnDestroy(): void {
    this.closeSub.unsubscribe();
  }

  ngOnInit(): void {}
}
