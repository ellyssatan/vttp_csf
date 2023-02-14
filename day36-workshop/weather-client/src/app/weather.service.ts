import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment.development";
import { City } from "./models";

@Injectable()
export class WeatherService {

    countries = [
        { country :'China', city : 'Beijing', image : 'https://cdn.britannica.com/03/198203-050-138BB1C3/entrance-Gate-of-Divine-Might-Beijing-Forbidden.jpg' },
        { country :'Malaysia', city : 'Kuala Lumpur', image : 'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2018/06/Kuala-Lumpur-travel-guide-KL-food-hotels-things-to-do-900x643.png' },
        { country :'India', city : 'New Delhi', image : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/23/c6/0f/img-20160507-135554-largejpg.jpg?w=400&h=300&s=1' },
        { country :'Singapore', city : 'Singapore', image : 'https://media.cnn.com/api/v1/images/stellar/prod/191212182124-04-singapore-buildings.jpg?q=w_3000,h_1996,x_0,y_0,c_fill' }
    ]

    constructor(private httpClient : HttpClient){}

    getWeather(city : string, apiKey : string) : Promise<any> {
        const param = new HttpParams()
                        .set("q", city)
                        .set("appid", apiKey)

        return lastValueFrom(this.httpClient.get(environment.openweatherUrl, {params : param}))
    }

    addCity(city : City) {
        this.countries.push({ country : city.country, city : city.city, image : city.image })
        this.countries.sort((a, b) => (a.country > b.country ? 1 : -1))
    }
}