import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-link-category',
  standalone: true,
  imports: [],
  templateUrl: './footer-link-category.component.html',
  styleUrl: './footer-link-category.component.css',
})
export class FooterLinkCategoryComponent {
  @Input() category = {
    titleCategory: '',
    links: [
      {
        title_link: '',
        href: '',
      },
    ],
  };
}
