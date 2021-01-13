import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPredSearchComponent } from './order-pred-search.component';

describe('OrderPredSearchComponent', () => {
  let component: OrderPredSearchComponent;
  let fixture: ComponentFixture<OrderPredSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPredSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPredSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
