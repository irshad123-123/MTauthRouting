import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductsDashboardComponent } from './prouducts-dashboard.component';

describe('ProuductsDashboardComponent', () => {
  let component: ProuductsDashboardComponent;
  let fixture: ComponentFixture<ProuductsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuductsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
