import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeikiNewComponent } from './keiki-new.component';

describe('KeikiNewComponent', () => {
  let component: KeikiNewComponent;
  let fixture: ComponentFixture<KeikiNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeikiNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeikiNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
