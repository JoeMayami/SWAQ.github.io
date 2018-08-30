import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordPortalComponent } from './reset-password-portal.component';

describe('ResetPasswordPortalComponent', () => {
  let component: ResetPasswordPortalComponent;
  let fixture: ComponentFixture<ResetPasswordPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
