import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Weather } from '../models';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  OPENWEATHER_API_KEY = environment.openweather_api_key
  country ?: string
  city : string = 'Singapore'
  image ?: string
  model = new Weather('Singapore', 0, 0, 0, "", 0, 0, "")
  param$ !: Subscription

  constructor(private weatherSvc : WeatherService,
    private activatedRoute : ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    console.log("ngOnInit ...");
    // this.city = this.activatedRoute.snapshot.params['city'];
    this.param$ = this.activatedRoute.params.subscribe(
      (params) => {
        console.log("param val : " + params['city']);
        this.city = params['city'];
    })
    console.log(this.city)
    this.getWeatherFromAPI(this.city)
  }

  ngOnDestroy(): void {
    console.log("destroy subscription observable!")
    this.param$.unsubscribe()
  }

  getWeatherFromAPI(city : string) {
    this.weatherSvc.getWeather(city, this.OPENWEATHER_API_KEY)
      .then((result) => {
        this.model = new Weather (
          city,
          result.main.temp,
          result.main.pressure,
          result.main.humidity,
          result.weather[0].description,
          result.wind.speed,
          result.wind.deg,
          result.weather[0].icon
        )
      }).catch((err)=> {
        console.log(err)
      })
  }

}
