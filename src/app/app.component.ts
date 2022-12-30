import { Component, OnInit } from '@angular/core';
import {
  firstValueFrom,
  lastValueFrom,
  map,
  Observable,
  Subscription,
} from 'rxjs';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'App';
  piped = 'This is a very long text';
  obs: Subscription = new Subscription();
  subscribtion: Subscription = new Subscription();
  unSub() {
    // this.obs.unsubscribe();
    this.subscribtion.unsubscribe();
  }
  subscribe(): void {
    let customObservable: Observable<number> = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if (count === 5) observer.complete();
        else if (count > 6)
          observer.error(new Error('Count is greater than 3'));
      }, 100);
    });

    let newObservable: Observable<string> = customObservable.pipe(
      map((data: number) => 'Round: ' + (data + 1))
    );
    newObservable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
      complete: () => console.log('Completed'),
    });

    this.subscribtion = customObservable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
      complete: () => console.log('Completed'),
    });
    firstValueFrom(customObservable).then((value) =>
      console.log('First value from' + value)
    );
    lastValueFrom(customObservable).then((value) =>
      console.log('Last value from ' + value)
    );
    // this.obs = this.src.subscribe((count: any) => {
    //   console.log(count);
    // });
  }
  getText = new Promise((resolve, _reject) => {
    return setTimeout(() => {
      resolve('This is a very long text');
    }, 2000);
  });
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
