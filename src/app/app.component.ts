import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MATERIAL_MODULES } from './shared/material-imports';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,MATERIAL_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Weather_app';

  weatherData: any;

  city ='';
  errorMsg ='';
  loading: boolean= false;

  temp ='';
  condition_text = '';

  constructor(private weatherApi:WeatherService){}

  fetchWeather(){

    if(!this.city.trim()) return;
    this.loading = true;
    this.errorMsg= '';
    this.weatherApi.getCurrentWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.getCurrentData();
        this.loading = false;

      },
      error: () => {
        this.errorMsg = 'City not found or API Error'
        this.loading = true;
      }
    });
  }

  getCurrentData(){
    const current = this.weatherData.current;
     this.temp = current.temp_c;
     this.condition_text = current.condition.text;
  }
}
