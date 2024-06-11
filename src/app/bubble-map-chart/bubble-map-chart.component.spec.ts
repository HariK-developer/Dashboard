import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleMapChartComponent } from './bubble-map-chart.component';

describe('BubbleMapChartComponent', () => {
  let component: BubbleMapChartComponent;
  let fixture: ComponentFixture<BubbleMapChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleMapChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleMapChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
