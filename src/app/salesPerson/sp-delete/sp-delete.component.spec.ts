import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpDeleteComponent } from './sp-delete.component';

describe('SpDeleteComponent', () => {
  let component: SpDeleteComponent;
  let fixture: ComponentFixture<SpDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
