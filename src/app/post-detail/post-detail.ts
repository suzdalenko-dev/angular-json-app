import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, Posts } from '../services/posts';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})

export class PostDetail implements OnInit {

  post = signal<Post | null>(null);

  constructor(
    private route: ActivatedRoute,
    private posts: Posts
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      this.posts.getPost(id).subscribe(data => {
        this.post.set(data);
      });

    });

  }

}