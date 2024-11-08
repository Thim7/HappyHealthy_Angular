import { Component } from '@angular/core';
import { FooterLinkCategoryComponent } from '../footer-link-category/footer-link-category.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterLinkCategoryComponent, IconButtonComponent],
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
          icon: '',
        },
        {
          title_link: 'Pricing',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Case studies',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Reviews',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Updates',
          href: '#',
          icon: '',
        },
      ],
    },
    {
      titleCategory: 'Company',
      links: [
        {
          title_link: 'About',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Contact us',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Careers',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Culture',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Blog',
          href: '#',
          icon: '',
        },
      ],
    },
    {
      titleCategory: 'Support',
      links: [
        {
          title_link: 'Getting started',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Help center',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Server status',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Report a bug',
          href: '#',
          icon: '',
        },
        {
          title_link: 'Chat support',
          href: '#',
          icon: '',
        },
      ],
    },
    {
      titleCategory: 'Contacts us',
      links: [
        {
          title_link: 'contact@company.com',
          href: '#',
          icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZmlsbD0iIzE2NzhmMiIgZD0iTTUgNWgxM2EzIDMgMCAwIDEgMyAzdjlhMyAzIDAgMCAxLTMgM0g1YTMgMyAwIDAgMS0zLTNWOGEzIDMgMCAwIDEgMy0zbTAgMWMtLjUgMC0uOTQuMTctMS4yOC40N2w3Ljc4IDUuMDNsNy43OC01LjAzQzE4Ljk0IDYuMTcgMTguNSA2IDE4IDZ6bTYuNSA2LjcxTDMuMTMgNy4yOEMzLjA1IDcuNSAzIDcuNzUgMyA4djlhMiAyIDAgMCAwIDIgMmgxM2EyIDIgMCAwIDAgMi0yVjhjMC0uMjUtLjA1LS41LS4xMy0uNzJ6IiAvPgo8L3N2Zz4=',
        },
        {
          title_link: '(414) 687 - 5892',
          href: '#',
          icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZmlsbD0iIzE2NzhmMiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS43MzMgMi4wNDNjMS4yMTctMS4yMSAzLjIyMS0uOTk1IDQuMjQuMzY3bDEuMjYyIDEuNjg0Yy44MyAxLjEwOC43NTYgMi42NTYtLjIyOSAzLjYzNWwtLjIzOC4yMzhhLjY1LjY1IDAgMCAwLS4wMDguMzA2Yy4wNjMuNDA4LjQwNCAxLjI3MiAxLjgzMiAyLjY5MnMyLjI5OCAxLjc2IDIuNzEyIDEuODI0YS43LjcgMCAwIDAgLjMxNS0uMDA5bC40MDgtLjQwNmMuODc2LS44NyAyLjIyLTEuMDMzIDMuMzA0LS40NDRsMS45MSAxLjA0YzEuNjM3Ljg4OCAyLjA1IDMuMTEyLjcxIDQuNDQ1bC0xLjQyMSAxLjQxMmMtLjQ0OC40NDUtMS4wNS44MTYtMS43ODQuODg1Yy0xLjgxLjE2OS02LjAyNy0uMDQ3LTEwLjQ2LTQuNDU0Yy00LjEzNy00LjExNC00LjkzMS03LjcwMi01LjAzMi05LjQ3bC43NDktLjA0MmwtLjc0OS4wNDJjLS4wNS0uODk0LjM3Mi0xLjY1LjkxLTIuMTg0em0zLjA0IDEuMjY2Yy0uNTA3LS42NzctMS40NTEtLjczMS0xLjk4My0uMjAybC0xLjU3IDEuNTZjLS4zMy4zMjgtLjQ4OC42OS0uNDY4IDEuMDM2Yy4wOCAxLjQwNS43MiA0LjY0MiA0LjU5MiA4LjQ5MmM0LjA2MiA0LjAzOCA3LjgxMyA0LjE1OSA5LjI2MyA0LjAyM2MuMjk2LS4wMjcuNTktLjE4MS44NjUtLjQ1NGwxLjQyLTEuNDEzYy41NzgtLjU3NC40NTEtMS42Mi0uMzY3LTIuMDY0bC0xLjkxLTEuMDM5Yy0uNTI4LS4yODYtMS4xNDYtLjE5Mi0xLjUzLjE5bC0uNDU1LjQ1M2wtLjUzLS41MzJjLjUzLjUzMi41MjkuNTMzLjUyOC41MzNsLS4wMDEuMDAybC0uMDAzLjAwM2wtLjAwNy4wMDZsLS4wMTUuMDE0YTEgMSAwIDAgMS0uMTM2LjEwNmMtLjA4LjA1My0uMTg2LjExMi0uMzE5LjE2MWMtLjI3LjEwMS0uNjI4LjE1NS0xLjA3LjA4N2MtLjg2Ny0uMTMzLTIuMDE2LS43MjQtMy41NDMtMi4yNDJjLTEuNTI2LTEuNTE4LTIuMTIyLTIuNjYtMi4yNTYtMy41MjZjLS4wNjktLjQ0Mi0uMDE0LS44LjA4OC0xLjA3YTEuNSAxLjUgMCAwIDEgLjIzOC0uNDJsLjAzMi0uMDM1bC4wMTQtLjAxNWwuMDA2LS4wMDZsLjAwMy0uMDAzbC4wMDItLjAwMmwuNTMuNTNsLS41My0uNTMxbC4yODgtLjI4NWMuNDI4LS40MjcuNDg4LTEuMTM0LjA4NS0xLjY3M3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KPC9zdmc+',
        },
        {
          title_link: '794 St.San Francisco, 94102',
          href: '#',
          icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY3OGYyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij4KCQk8cGF0aCBkPSJNMTIuNTYgMjAuODJhLjk2Ljk2IDAgMCAxLTEuMTIgMEM2LjYxMSAxNy4zNzggMS40ODYgMTAuMjk4IDYuNjY3IDUuMTgyQTcuNiA3LjYgMCAwIDEgMTIgM2MyIDAgMy45MTkuNzg1IDUuMzMzIDIuMTgxYzUuMTgxIDUuMTE2LjA1NiAxMi4xOTYtNC43NzMgMTUuNjQiIC8+CgkJPHBhdGggZD0iTTEyIDEyYTIgMiAwIDEgMCAwLTRhMiAyIDAgMCAwIDAgNCIgLz4KCTwvZz4KPC9zdmc+',
        },
      ],
    },
  ];
  iconLinkArr = [
    {
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZmlsbD0iIzE2NzhmMiIgZD0iTTkuMTk4IDIxLjVoNHYtOC4wMWgzLjYwNGwuMzk2LTMuOThoLTRWNy41YTEgMSAwIDAgMSAxLTFoM3YtNGgtM2E1IDUgMCAwIDAtNSA1djIuMDFoLTJsLS4zOTYgMy45OGgyLjM5NnoiIC8+Cjwvc3ZnPg==',
      href: '#',
    },
    {
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZmlsbD0iIzE2NzhmMiIgZD0iTTIyLjQ2IDZjLS43Ny4zNS0xLjYuNTgtMi40Ni42OWMuODgtLjUzIDEuNTYtMS4zNyAxLjg4LTIuMzhjLS44My41LTEuNzUuODUtMi43MiAxLjA1QzE4LjM3IDQuNSAxNy4yNiA0IDE2IDRjLTIuMzUgMC00LjI3IDEuOTItNC4yNyA0LjI5YzAgLjM0LjA0LjY3LjExLjk4QzguMjggOS4wOSA1LjExIDcuMzggMyA0Ljc5Yy0uMzcuNjMtLjU4IDEuMzctLjU4IDIuMTVjMCAxLjQ5Ljc1IDIuODEgMS45MSAzLjU2Yy0uNzEgMC0xLjM3LS4yLTEuOTUtLjV2LjAzYzAgMi4wOCAxLjQ4IDMuODIgMy40NCA0LjIxYTQuMiA0LjIgMCAwIDEtMS45My4wN2E0LjI4IDQuMjggMCAwIDAgNCAyLjk4YTguNTIgOC41MiAwIDAgMS01LjMzIDEuODRxLS41MSAwLTEuMDItLjA2QzMuNDQgMjAuMjkgNS43IDIxIDguMTIgMjFDMTYgMjEgMjAuMzMgMTQuNDYgMjAuMzMgOC43OWMwLS4xOSAwLS4zNy0uMDEtLjU2Yy44NC0uNiAxLjU2LTEuMzYgMi4xNC0yLjIzIiAvPgo8L3N2Zz4=',
      href: '#',
    },
    {
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZmlsbD0iIzE2NzhmMiIgZD0iTTEzLjAyOCAyYzEuMTI1LjAwMyAxLjY5Ni4wMDkgMi4xODkuMDIzbC4xOTQuMDA3Yy4yMjQuMDA4LjQ0NS4wMTguNzEyLjAzYzEuMDY0LjA1IDEuNzkuMjE4IDIuNDI3LjQ2NWMuNjYuMjU0IDEuMjE2LjU5OCAxLjc3MiAxLjE1M2E0LjkgNC45IDAgMCAxIDEuMTUzIDEuNzcyYy4yNDcuNjM3LjQxNSAxLjM2My40NjUgMi40MjhjLjAxMi4yNjYuMDIyLjQ4Ny4wMy43MTJsLjAwNi4xOTRjLjAxNS40OTIuMDIxIDEuMDYzLjAyMyAyLjE4OGwuMDAxLjc0NnYxLjMxYTc5IDc5IDAgMCAxLS4wMjMgMi4xODhsLS4wMDYuMTk0Yy0uMDA4LjIyNS0uMDE4LjQ0Ni0uMDMuNzEyYy0uMDUgMS4wNjUtLjIyIDEuNzktLjQ2NiAyLjQyOGE0LjkgNC45IDAgMCAxLTEuMTUzIDEuNzcyYTQuOSA0LjkgMCAwIDEtMS43NzIgMS4xNTNjLS42MzcuMjQ3LTEuMzYzLjQxNS0yLjQyNy40NjVsLS43MTIuMDNsLS4xOTQuMDA2Yy0uNDkzLjAxNC0xLjA2NC4wMjEtMi4xODkuMDIzbC0uNzQ2LjAwMWgtMS4zMDlhNzggNzggMCAwIDEtMi4xODktLjAyM2wtLjE5NC0uMDA2YTYzIDYzIDAgMCAxLS43MTItLjAzMWMtMS4wNjQtLjA1LTEuNzktLjIxOC0yLjQyOC0uNDY1YTQuOSA0LjkgMCAwIDEtMS43NzEtMS4xNTNhNC45IDQuOSAwIDAgMS0xLjE1NC0xLjc3MmMtLjI0Ny0uNjM3LS40MTUtMS4zNjMtLjQ2NS0yLjQyOGwtLjAzLS43MTJsLS4wMDUtLjE5NEE3OSA3OSAwIDAgMSAyIDEzLjAyOHYtMi4wNTZhNzkgNzkgMCAwIDEgLjAyMi0yLjE4OGwuMDA3LS4xOTRjLjAwOC0uMjI1LjAxOC0uNDQ2LjAzLS43MTJjLjA1LTEuMDY1LjIxOC0xLjc5LjQ2NS0yLjQyOEE0LjkgNC45IDAgMCAxIDMuNjggMy42NzhhNC45IDQuOSAwIDAgMSAxLjc3LTEuMTUzYy42MzgtLjI0NyAxLjM2My0uNDE1IDIuNDI4LS40NjVjLjI2Ni0uMDEyLjQ4OC0uMDIyLjcxMi0uMDNsLjE5NC0uMDA2YTc5IDc5IDAgMCAxIDIuMTg4LS4wMjN6TTEyIDdhNSA1IDAgMSAwIDAgMTBhNSA1IDAgMCAwIDAtMTBtMCAyYTMgMyAwIDEgMSAuMDAxIDZhMyAzIDAgMCAxIDAtNm01LjI1LTMuNWExLjI1IDEuMjUgMCAwIDAgMCAyLjVhMS4yNSAxLjI1IDAgMCAwIDAtMi41IiAvPgo8L3N2Zz4=',
      href: '#',
    },
    {
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZmlsbD0iIzE2NzhmMiIgZD0iTTYuOTQgNWEyIDIgMCAxIDEtNC0uMDAyYTIgMiAwIDAgMSA0IC4wMDJNNyA4LjQ4SDNWMjFoNHptNi4zMiAwSDkuMzRWMjFoMy45NHYtNi41N2MwLTMuNjYgNC43Ny00IDQuNzcgMFYyMUgyMnYtNy45M2MwLTYuMTctNy4wNi01Ljk0LTguNzItMi45MXoiIC8+Cjwvc3ZnPg==',
      href: '#',
    },
    {
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZmlsbD0iIzE2NzhmMiIgZD0ibTEwIDE1bDUuMTktM0wxMCA5em0xMS41Ni03LjgzYy4xMy40Ny4yMiAxLjEuMjggMS45Yy4wNy44LjEgMS40OS4xIDIuMDlMMjIgMTJjMCAyLjE5LS4xNiAzLjgtLjQ0IDQuODNjLS4yNS45LS44MyAxLjQ4LTEuNzMgMS43M2MtLjQ3LjEzLTEuMzMuMjItMi42NS4yOGMtMS4zLjA3LTIuNDkuMS0zLjU5LjFMMTIgMTljLTQuMTkgMC02LjgtLjE2LTcuODMtLjQ0Yy0uOS0uMjUtMS40OC0uODMtMS43My0xLjczYy0uMTMtLjQ3LS4yMi0xLjEtLjI4LTEuOWMtLjA3LS44LS4xLTEuNDktLjEtMi4wOUwyIDEyYzAtMi4xOS4xNi0zLjguNDQtNC44M2MuMjUtLjkuODMtMS40OCAxLjczLTEuNzNjLjQ3LS4xMyAxLjMzLS4yMiAyLjY1LS4yOGMxLjMtLjA3IDIuNDktLjEgMy41OS0uMUwxMiA1YzQuMTkgMCA2LjguMTYgNy44My40NGMuOS4yNSAxLjQ4LjgzIDEuNzMgMS43MyIgLz4KPC9zdmc+',
      href: '#',
    },
  ];
}
