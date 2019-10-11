import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRelatedCardComponent } from './product-related-card.component';

describe('ProductRelatedCardComponent', () => {
  let component: ProductRelatedCardComponent;
  let fixture: ComponentFixture<ProductRelatedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRelatedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRelatedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
