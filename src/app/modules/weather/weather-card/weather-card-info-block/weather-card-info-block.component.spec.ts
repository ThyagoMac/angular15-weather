import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardInfoBlockComponent } from './weather-card-info-block.component';

describe('WeatherCardInfoBlockComponent', () => {
  let component: WeatherCardInfoBlockComponent;
  let fixture: ComponentFixture<WeatherCardInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardInfoBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCardInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
