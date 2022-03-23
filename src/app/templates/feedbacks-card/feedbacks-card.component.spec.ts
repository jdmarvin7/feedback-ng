import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksCardComponent } from './feedbacks-card.component';

describe('FeedbacksCardComponent', () => {
  let component: FeedbacksCardComponent;
  let fixture: ComponentFixture<FeedbacksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacksCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
