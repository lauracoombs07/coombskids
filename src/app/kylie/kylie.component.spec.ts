import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KylieComponent } from './kylie.component';

describe('KylieComponent', () => {
  let component: KylieComponent;
  let fixture: ComponentFixture<KylieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KylieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KylieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
