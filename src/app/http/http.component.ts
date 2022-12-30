import { Component, OnInit } from '@angular/core';
import { HttpService, Post } from './http.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  loadedPosts: Post[] = [];
  error: string = '';
  isFetching = false;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    const res = this.httpService.createPost(postData).subscribe({
      next: (data) => {
        console.log('next ', data);
      },
      error: (err) => {
        this.error = err.error.msg;
      },
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.loadedPosts = [];
    this.httpService.clearPosts();
  }
  async fetchPost(title: string) {
    this.httpService
      .fetchPost('title1')
      .then((post) => {
        console.log(post);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async fetchPosts() {
    this.isFetching = true;

    setTimeout(async () => {
      // this.httpService
      //   .fetchPosts()
      //   .then((posts) => {
      //     this.loadedPosts = posts;
      //   })
      //   .catch((err) => {
      //     console.log('promise catch ', err.message);
      //   });

      try {
        this.loadedPosts = await this.httpService.fetchPosts();
      } catch (error: any) {
        console.log('async catch ', error.message);
        alert(error.message);
      }
      this.isFetching = false;
    }, 1000);
  }
  onCloseAlert() {
    this.error = '';
  }
}
