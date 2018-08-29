import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPortalComponent } from './dashboard-portal.component';

describe('DashboardPortalComponent', () => {
  let component: DashboardPortalComponent;
  let fixture: ComponentFixture<DashboardPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
