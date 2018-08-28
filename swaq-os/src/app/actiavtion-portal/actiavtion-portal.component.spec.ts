import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiavtionPortalComponent } from './actiavtion-portal.component';

describe('ActiavtionPortalComponent', () => {
  let component: ActiavtionPortalComponent;
  let fixture: ComponentFixture<ActiavtionPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiavtionPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiavtionPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
