import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})

export class Posts {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) {}
  
  getPosts() {
    return this.http.get<Post[]>(this.apiUrl);
  }
  
  getPost(id: number) {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
}
