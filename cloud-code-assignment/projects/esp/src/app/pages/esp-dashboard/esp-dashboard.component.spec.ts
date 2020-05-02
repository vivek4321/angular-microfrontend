import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspDashboardComponent } from './esp-dashboard.component';

describe('EspDashboardComponent', () => {
  let component: EspDashboardComponent;
  let fixture: ComponentFixture<EspDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
