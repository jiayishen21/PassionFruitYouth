import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationPageComponent } from './motivation-page.component';

describe('MotivationPageComponent', () => {
  let component: MotivationPageComponent;
  let fixture: ComponentFixture<MotivationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
