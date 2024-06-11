import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiPieChartComponent } from './semi-pie-chart.component';

describe('SemiPieChartComponent', () => {
  let component: SemiPieChartComponent;
  let fixture: ComponentFixture<SemiPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemiPieChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
