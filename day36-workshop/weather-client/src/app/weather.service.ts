import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment.development";
import { City } from "./models";

@Injectable()
export class WeatherService {

    countries = [
        { countryName :'China', city : 'Beijing' },
        { countryName :'Malaysia', city : 'Kuala Lumpur' },
        { countryName :'India', city : 'New Delhi' },
        { countryName :'Singapore', city : 'Singapore' }
    ]

    countriesImg = [
        { city :'Beijing', imgUrl : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fplace%2FBeijing&psig=AOvVaw0J0UvNv7usTrJoZEDrQHO4&ust=1676354193719000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDguJPokf0CFQAAAAAdAAAAABAE' },
        { city :'Kuala Lumpur', imgUrl : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthehoneycombers.com%2Fsingapore%2Fkuala-lumpur-travel-guide-2%2F&psig=AOvVaw2ScgJ2tWBbGxLJ7S8YOUC_&ust=1676354247911000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjcoq3okf0CFQAAAAAdAAAAABAE' },
        { city :'New Delhi', imgUrl : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com.sg%2FTourism-g304551-New_Delhi_National_Capital_Territory_of_Delhi-Vacations.html&psig=AOvVaw1IXZbx2ptjk95vXYqnIxwo&ust=1676354267124000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPil4rbokf0CFQAAAAAdAAAAABAE' },
        { city :'Singapore', imgUrl : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnn.com%2Ftravel%2Farticle%2Fsingapore-travel-covid-19%2Findex.html&psig=AOvVaw36uVysIK1Pd46dcyxML9j9&ust=1676354294382000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPilu8Pokf0CFQAAAAAdAAAAABAE' }
    ]

    constructor(private httpClient : HttpClient){}

    getWeather(city : string, apiKey : string) : Promise<any> {
        const param = new HttpParams()
                        .set("q", city)
                        .set("appid", apiKey)

        return lastValueFrom(this.httpClient.get(environment.openweatherUrl, {params : param}))
    }

    addCity(city : City) {
        this.countries.push({ countryName : city.country, city : city.city })
        this.countries.sort((a, b) => (a.countryName > b.countryName ? 1 : -1))
        this.countriesImg.push({ city : city.city, imgUrl: `${city.image}` })
    }
}