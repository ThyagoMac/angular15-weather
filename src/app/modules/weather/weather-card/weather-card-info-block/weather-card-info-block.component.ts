import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card-info-block',
  templateUrl: './weather-card-info-block.component.html',
  styleUrls: [],
})
export class WeatherCardInfoBlockComponent {
  @Input() icon!: any;
  @Input() label!: string;
  @Input() value!: number;
  @Input() symbol!: string;
}
