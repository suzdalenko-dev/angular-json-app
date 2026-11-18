import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter';
import { Post } from '../services/posts';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})


export class Counter {
  @Input() posts!: Post[];

  constructor(public counterService: CounterService) {}

}