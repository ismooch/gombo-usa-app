import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpIndexComponent } from './sp-index.component';

describe('SpIndexComponent', () => {
  let component: SpIndexComponent;
  let fixture: ComponentFixture<SpIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
