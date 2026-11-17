import { Component, signal, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Post, Posts } from './services/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly title = signal('angular-json-app');
   postsList = signal<Post[]>([]);

  constructor(private posts: Posts) {}

  loadPosts(): void {
    this.posts.getPosts().subscribe(data => {
      this.postsList.set(data.slice(0, 7));
      console.log(data.slice(0, 7));
    });
  }

  // Una vez, al inicializar el componente.
  ngOnInit(): void {
     this.loadPosts();
  }

  // showPostDetail(p: Post): void {
  //   alert('Título: ' + p.title + '\nDescripción: ' + p.body);
  // }
}

