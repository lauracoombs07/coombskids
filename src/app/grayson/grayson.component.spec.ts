import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraysonComponent } from './grayson.component';

describe('GraysonComponent', () => {
  let component: GraysonComponent;
  let fixture: ComponentFixture<GraysonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraysonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraysonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
