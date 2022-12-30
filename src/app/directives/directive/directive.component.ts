import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  constructor() {}
  list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit(): void {}
  odd(number: number) {
    return number % 2 != 0;
  }
}
