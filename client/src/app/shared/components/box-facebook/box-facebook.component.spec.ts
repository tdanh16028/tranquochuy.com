import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFacebookComponent } from './box-facebook.component';

describe('BoxFacebookComponent', () => {
  let component: BoxFacebookComponent;
  let fixture: ComponentFixture<BoxFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
