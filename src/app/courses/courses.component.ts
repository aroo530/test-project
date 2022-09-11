import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  server = '';
  constructor() {}
  ngOnInit(): void {}
  serverCreated = false;
  servers = [
    'server 1',
    'server 2',
    'server 3',
    'server 4',
    'server 5',
    'server 6',
  ];
  createServer() {
    // this.server = (<HTMLInputElement>event.target).value;
    // this.serverCreated = true;
    // console.log(this.server);
    // this.courses.push(course)
    this.serverCreated = true;
  }

  checkFlag() {
    if (this.server != '') {
      return true;
    } else {
      return false;
    }
  }
  resetUsername() {
    this.server = '';
  }
  getColor() {
    if (this.serverCreated) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
