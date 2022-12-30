import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription = new Subscription();
  constructor(private authService: AuthService) {}
  isAuthenticated = false;
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      // if user is not null then user is authenticated
      // I refuse to use !!user because it is not readable
      this.isAuthenticated = user ? true : false;
      console.log('subscribed to user :: ', user);
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}
