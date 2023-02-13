import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from '../models';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  form !: FormGroup
  country ?: string
  city ?: string
  image ?: string
  cityObj ?: City

  constructor(private fb:FormBuilder, private router : Router, private weatherSvc : WeatherService) {}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  createForm() : FormGroup {
    return this.fb.group({
      countryName : this.fb.control(''),
      city : this.fb.control(''),
      image : this.fb.control('')
    })
  }

  add() {
    const countryName = this.form?.value['countryName']
    const city = this.form?.value['city']
    const image = this.form?.value['image']
    this.cityObj = { country : countryName, city : city, image : image }
    this.weatherSvc.addCity(this.cityObj)
    this.router.navigate(['/'])
  }

}
