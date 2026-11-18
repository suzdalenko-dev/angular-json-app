import { Component, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post, Posts } from '../services/posts';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-posts-list',
  imports: [RouterLink, Counter],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})

export class PostsList implements OnInit {

  postsList = signal<Post[]>([]);

  constructor(private posts: Posts) {}

  loadPosts(): void {
    this.posts.getPosts().subscribe(data => {
      this.postsList.set(data.slice(0, 7));
      console.log(data.slice(0, 7));
    });
  }

  ngOnInit(): void {
    this.loadPosts();
  }


  selectedPost = signal<Post | null>(null);
  
  onPostSelected(post: Post): void {
    this.selectedPost.set(post);
  }
}

