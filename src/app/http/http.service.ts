import { HttpClient, HttpEventType, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  createPost(postData: { title: string; content: string }) {
    // Send Http request
    return this.http.post('http://localhost:3000/post', postData);
  }
  fetchPost(title: string) {
    const result = this.http.get<{ msg: string; data: Post }>(
      `http://localhost:3000/post`,
      {
        params: new HttpParams().set('title', title),
      }
    );

    return lastValueFrom(result);
  }
  fetchPosts() {
    const result = this.http
      .get<{ msg: string; data: Post[] }>('http://localhost:3000/posts', {
        responseType: 'json',
        observe: 'events',
      })
      .pipe(
        tap((events) => {
          if (events.type === HttpEventType.Sent) {
            console.log('Request sent');
          }
          if (events.type === HttpEventType.Response) {
            console.log('Response received', events.body);
          }
        }),
        map((response) => {
          if (response.type === HttpEventType.Response) {
            return response.body?.data ?? [];
          }
          return [];
        })
      );
    return lastValueFrom(result);
  }

  clearPosts() {
    // Send Http request
    const result = this.http.delete<{ msg: string }>(
      'http://localhost:3000/post'
    );
    return lastValueFrom(result);
  }
}

export type Post = {
  title: string;
  content: string;
};
