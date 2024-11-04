import { Component, HostListener } from '@angular/core';
import { NgOptimizedImage, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    NgOptimizedImage,
    MatTabsModule,
    RouterLink,
    NgClass,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isOnTop: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.isOnTop = !(document.documentElement.scrollTop > 0);
  }
}
