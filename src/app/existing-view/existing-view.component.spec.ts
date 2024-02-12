import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingViewComponent } from './existing-view.component';

describe('ExistingViewComponent', () => {
  let component: ExistingViewComponent;
  let fixture: ComponentFixture<ExistingViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingViewComponent]
    });
    fixture = TestBed.createComponent(ExistingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
