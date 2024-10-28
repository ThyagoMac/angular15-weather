import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherDatasInterface } from 'src/app/models/interfaces/weather.interface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  city = 'São Paulo';
  weatherDatas!: WeatherDatasInterface;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadWeatherDatas(this.city);
  }

  loadWeatherDatas(city: string): void {
    this.weatherService
      .getWeatherDatas(city)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
        },
        error: (error) => console.log(error),
      });
  }

  onUpdateCity(): void {
    this.loadWeatherDatas(this.city);
    this.city = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
