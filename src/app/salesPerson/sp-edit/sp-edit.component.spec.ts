import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpEditComponent } from './sp-edit.component';

describe('SpEditComponent', () => {
  let component: SpEditComponent;
  let fixture: ComponentFixture<SpEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
