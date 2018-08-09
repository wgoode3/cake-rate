import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeikiSingleComponent } from './keiki-single.component';

describe('KeikiSingleComponent', () => {
  let component: KeikiSingleComponent;
  let fixture: ComponentFixture<KeikiSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeikiSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeikiSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
