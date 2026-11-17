import { Component, signal, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post, Posts } from './services/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly title = signal('angular-json-app');
   postsList = signal<Post[]>([]);

  constructor(private posts: Posts) {}

  loadPosts(): void {
    this.posts.getPosts().subscribe(data => {
      this.postsList.set(data);
      console.log(data);
    });
  }

  // Una vez, al inicializar el componente.
  ngOnInit(): void {
     this.loadPosts();
  }

  showPostDetail(p: Post): void {
    alert('Título: ' + p.title + '\nDescripción: ' + p.body);
  }
}

