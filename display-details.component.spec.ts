import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailsComponent } from './display-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: DisplayDetailsComponent;
  let fixture: ComponentFixture<DisplayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
