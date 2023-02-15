import { Component, OnInit } from '@angular/core';
import { CitiesRepository } from '../cities.repository';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities : any
  constructor(private weatherSvc : WeatherService, private cRepo : CitiesRepository) {}

  async ngOnInit() {
    this.cities =  await this.cRepo.getAllCities();
  }

}
