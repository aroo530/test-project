import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  constructor() {}
  @Input('log') log: string = '';
  ngOnInit(): void {}
}
