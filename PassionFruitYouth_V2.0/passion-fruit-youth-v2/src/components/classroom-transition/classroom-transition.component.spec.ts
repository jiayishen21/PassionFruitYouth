import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomTransitionComponent } from './classroom-transition.component';

describe('ClassroomTransitionComponent', () => {
  let component: ClassroomTransitionComponent;
  let fixture: ComponentFixture<ClassroomTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
