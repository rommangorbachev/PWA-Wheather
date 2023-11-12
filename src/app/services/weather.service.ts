import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {weatherApiKey} from "../../../api-keys.config";
import { Observable } from 'rxjs';
import {Weather} from "../core";

@Injectable()
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = weatherApiKey;

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);
    return this.http.get<Weather>(this.apiUrl + 'weather', { params:
      options });
  }
}
