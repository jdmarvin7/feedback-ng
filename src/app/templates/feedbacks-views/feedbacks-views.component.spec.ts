import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksViewsComponent } from './feedbacks-views.component';

describe('FeedbacksViewsComponent', () => {
  let component: FeedbacksViewsComponent;
  let fixture: ComponentFixture<FeedbacksViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacksViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
