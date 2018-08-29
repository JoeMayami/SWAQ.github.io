import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigupPortalComponent } from './sigup-portal.component';

describe('SigupPortalComponent', () => {
  let component: SigupPortalComponent;
  let fixture: ComponentFixture<SigupPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigupPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigupPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
