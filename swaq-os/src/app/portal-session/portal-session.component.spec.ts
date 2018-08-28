import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSessionComponent } from './portal-session.component';

describe('PortalSessionComponent', () => {
  let component: PortalSessionComponent;
  let fixture: ComponentFixture<PortalSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
