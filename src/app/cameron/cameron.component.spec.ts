import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameronComponent } from './cameron.component';

describe('CameronComponent', () => {
  let component: CameronComponent;
  let fixture: ComponentFixture<CameronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
