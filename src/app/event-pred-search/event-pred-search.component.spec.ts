import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPredSearchComponent } from './event-pred-search.component';

describe('EventPredSearchComponent', () => {
  let component: EventPredSearchComponent;
  let fixture: ComponentFixture<EventPredSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPredSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPredSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
