import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
