import { Component } from '@angular/core';
import { FooterLinkCategoryComponent } from '../footer-link-category/footer-link-category.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterLinkCategoryComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerLinkCategoryArr = [
    {
      titleCategory: 'Product',
      links: [
        {
          title_link: 'Features',
          href: '#',
        },
        {
          title_link: 'Pricing',
          href: '#',
        },
        {
          title_link: 'Case studies',
          href: '#',
        },
        {
          title_link: 'Reviews',
          href: '#',
        },
        {
          title_link: 'Updates',
          href: '#',
        },
      ],
    },
    {
      titleCategory: 'Company',
      links: [
        {
          title_link: 'About',
          href: '#',
        },
        {
          title_link: 'Contact us',
          href: '#',
        },
        {
          title_link: 'Careers',
          href: '#',
        },
        {
          title_link: 'Culture',
          href: '#',
        },
        {
          title_link: 'Blog',
          href: '#',
        },
      ],
    },
    {
      titleCategory: 'Support',
      links: [
        {
          title_link: 'Getting started',
          href: '#',
        },
        {
          title_link: 'Help center',
          href: '#',
        },
        {
          title_link: 'Server status',
          href: '#',
        },
        {
          title_link: 'Report a bug',
          href: '#',
        },
        {
          title_link: 'Chat support',
          href: '#',
        },
      ],
    },
    {
      titleCategory: 'Contacts us',
      links: [
        {
          title_link: 'contact@company.com',
          href: '#',
        },
        {
          title_link: '(414) 687 - 5892',
          href: '#',
        },
        {
          title_link: '794 St.San Francisco, 94102',
          href: '#',
        },
      ],
    },
  ];
}
