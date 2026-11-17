import { Component } from '@angular/core';
import { CounterService } from '../../services/counter';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    constructor(public counterService: CounterService) {}

}
