import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SawyerComponent } from './sawyer.component';

describe('SawyerComponent', () => {
  let component: SawyerComponent;
  let fixture: ComponentFixture<SawyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SawyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
