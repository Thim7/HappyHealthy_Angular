import { Component, Input } from '@angular/core';
import { DragScrollItemDirective } from 'ngx-drag-scroll';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DragScrollItemDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() topic = { img: '', title: '', description: '' };
}
