import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinkCategoryComponent } from './footer-link-category.component';

describe('FooterLinkCategoryComponent', () => {
  let component: FooterLinkCategoryComponent;
  let fixture: ComponentFixture<FooterLinkCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLinkCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLinkCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
