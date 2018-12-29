import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexiaComponent } from './alexia.component';

describe('AlexiaComponent', () => {
  let component: AlexiaComponent;
  let fixture: ComponentFixture<AlexiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
