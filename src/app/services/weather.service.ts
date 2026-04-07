import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private API_KEY ="89e6aeb69e054689b3f165932263003";

  private url ="https://api.weatherapi.com/v1";

  getCurrentWeather(city: string){

    const params = new HttpParams()
    .set('key',this.API_KEY)
    .set('q',city)

    return this.http.get(`${this.url}/current.json`,{params});

  }
}
