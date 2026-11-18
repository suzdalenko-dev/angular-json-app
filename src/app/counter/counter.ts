import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CounterService } from '../services/counter';
import { Post } from '../services/posts';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})


export class Counter {
  // desde el padre pasamos al hijo el listado de los post
  @Input() posts!: Post[];
  
  // desde el hijo pasamos info al padre
  // Declara un evento que el padre puede escuchar.
  @Output() postSelected = new EventEmitter<Post>();

  constructor(public counterService: CounterService) {}

  selectPost(): void {
    const post = this.posts[this.counterService.count()];
    if (post) {
      this.postSelected.emit(post);
    }
  }

}