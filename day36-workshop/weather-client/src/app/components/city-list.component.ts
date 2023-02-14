import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities : any
  images : any
  constructor(private weatherSvc : WeatherService) {}

  ngOnInit(): void {
    this.cities = this.weatherSvc.countries
    this.images = this.weatherSvc.countriesImg
  }

}
