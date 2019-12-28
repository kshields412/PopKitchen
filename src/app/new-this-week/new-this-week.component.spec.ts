import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThisWeekComponent } from './new-this-week.component';

describe('NewThisWeekComponent', () => {
  let component: NewThisWeekComponent;
  let fixture: ComponentFixture<NewThisWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewThisWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewThisWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
