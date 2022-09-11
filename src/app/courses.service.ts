import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  heros;
  getCourses() {
    return ['course 1', 'course 2', 'course 3'];
  }
  getTitle() {
    return 'courses';
  }

  constructor(private http: HttpClient) {
    this.heros = http.get('heros/');
  }
}
