import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPredSearchComponent } from './customer-pred-search.component';

describe('CustomerPredSearchComponent', () => {
  let component: CustomerPredSearchComponent;
  let fixture: ComponentFixture<CustomerPredSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPredSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPredSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
