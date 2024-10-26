import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherDatasInterface } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {
  city = 'São Paulo';
  weatherDatas!: WeatherDatasInterface;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherDatas(this.city);
  }

  getWeatherDatas(city: string): void {
    this.weatherService.getWeatherDatas(city).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
      },
      error: (error) => console.log(error),
    });
  }
}
