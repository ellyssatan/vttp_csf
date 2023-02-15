import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Dexie from "dexie";
import { City } from "./models";


@Injectable()
export class CitiesRepository extends Dexie {

    // Variable to hold the table
    city !: Dexie.Table<City, string>   // <object, key>


    constructor(private router : Router) {

        // Name of database
        super('citydb')
        this.version(1).stores({
            // city table, with email as PK
            city : 'city'
        })

        this.city = this.table('city')
    }

    // add to Dexie
    addCity(city : City) : Promise<string> {
        return this.city.add(city)
    }

    getAllCities() : Promise<City[]> {
        return this.city.orderBy('city').toArray()
    }
}