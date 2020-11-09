import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExportComponent } from './event-export.component';

describe('EventExportComponent', () => {
  let component: EventExportComponent;
  let fixture: ComponentFixture<EventExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
