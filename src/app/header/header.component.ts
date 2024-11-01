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
  // currentClasses: Record<string, boolean> = {};
  // setCurrentClasses() {
  //   this.currentClasses = {
  //     'px-5': true,
  //     'd-flex': true,
  //     align-items-center: true,
  //     justify-content-between: true,
  //     py-4: true,
  //     fixed-top: true,
  //     z-3: true,
  //     bg-transparent: this.isOnTop
  //   };
  // }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.isOnTop = !(document.documentElement.scrollTop > 0);
  }
}
