import { Component, Input } from '@angular/core';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { WeatherDatasInterface } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent {
  @Input() weatherDatas!: WeatherDatasInterface;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  // Getter for img background
  get weatherImage(): string {
    if (this.weatherDatas.main.temp > 15) {
      return '../../../../assets/img/sun.jpg';
    }
    return '../../../../assets/img/cold1.jpg';
  }
}
