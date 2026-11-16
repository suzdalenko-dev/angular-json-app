import { Component, signal, OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Posts } from './services/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {
  protected readonly title = signal('angular-json-app');

  constructor(private posts: Posts) {}

  loadPosts() {
    this.posts.getPosts().subscribe(data => {
      console.log(data);
    });
  }

  // Una vez, al inicializar el componente.
  ngOnInit(): void {
     this.loadPosts();
  }

  ngOnChanges(): void{
    console.log('Han cambiado los valores de entrada');
  }

  ngDoCheck(): void{
    console.log('Angular comprueba los cambios');
  }

  ngAfterContentInit(): void{
    console.log('El contenido proyectado se ha inicializado');
  }

  ngOnDestroy(): void {
    console.log('El componente se está destruyendo');
  }
}
