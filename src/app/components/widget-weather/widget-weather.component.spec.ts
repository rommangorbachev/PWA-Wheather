import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWeatherComponent } from './widget-weather.component';

describe('WidgetWeatherComponent', () => {
  let component: WidgetWeatherComponent;
  let fixture: ComponentFixture<WidgetWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetWeatherComponent]
    });
    fixture = TestBed.createComponent(WidgetWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
