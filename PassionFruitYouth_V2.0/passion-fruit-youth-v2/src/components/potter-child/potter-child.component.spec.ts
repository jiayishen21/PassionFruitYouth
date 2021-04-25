import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotterChildComponent } from './potter-child.component';

describe('PotterChildComponent', () => {
  let component: PotterChildComponent;
  let fixture: ComponentFixture<PotterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotterChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
