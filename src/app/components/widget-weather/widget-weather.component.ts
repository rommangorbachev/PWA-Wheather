import { Component } from '@angular/core';
import {Weather} from "../../core";
import {WeatherService} from "../../services";

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.sass']
})
export class WidgetWeatherComponent {
  weather: Weather | undefined;

  constructor(private weatherService: WeatherService){ }

search(city: string) {
  this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
}
}
