import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeikiAllComponent } from './keiki-all.component';

describe('KeikiAllComponent', () => {
  let component: KeikiAllComponent;
  let fixture: ComponentFixture<KeikiAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeikiAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeikiAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
