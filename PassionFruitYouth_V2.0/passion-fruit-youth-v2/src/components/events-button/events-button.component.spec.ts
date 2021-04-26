import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsButtonComponent } from './events-button.component';

describe('EventsButtonComponent', () => {
  let component: EventsButtonComponent;
  let fixture: ComponentFixture<EventsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
