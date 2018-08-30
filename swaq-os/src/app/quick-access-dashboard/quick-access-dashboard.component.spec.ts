import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccessDashboardComponent } from './quick-access-dashboard.component';

describe('QuickAccessDashboardComponent', () => {
  let component: QuickAccessDashboardComponent;
  let fixture: ComponentFixture<QuickAccessDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAccessDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAccessDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
