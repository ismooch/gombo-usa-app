import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrIndexComponent } from './cr-index.component';

describe('CrIndexComponent', () => {
  let component: CrIndexComponent;
  let fixture: ComponentFixture<CrIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
