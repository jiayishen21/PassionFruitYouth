import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesButtonComponent } from './opportunities-button.component';

describe('OpportunitiesButtonComponent', () => {
  let component: OpportunitiesButtonComponent;
  let fixture: ComponentFixture<OpportunitiesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitiesButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
