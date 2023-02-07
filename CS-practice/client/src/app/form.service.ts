import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { User } from "./model";

@Injectable()
export class FormService {

    constructor(private httpclient: HttpClient) { }

    createUser(data: User): Promise<User> {
        // Create form
        const payload = new HttpParams()
                        .set("name", data?.name ? data.name : "")
                        .set("email", data.email)
                        .set("password", data.password)

        // Set headers
        const headers = new HttpHeaders()
                        .set("Content-Type", "application/x-www-form-urlencoded")
                        .set("Accept", "application/json")
        return firstValueFrom(
            this.httpclient.post<User>('http://localhost:8080/register', payload.toString(), { headers })
        )
    }

    loginUser(data: User): Promise<User> {
        // Create form
        const payload = new HttpParams()
                        // .set("name", data?.name ? data.name : "")
                        .set("email", data.email)
                        .set("password", data.password)

        // Set headers
        const headers = new HttpHeaders()
                        .set("Content-Type", "application/x-www-form-urlencoded")
                        .set("Accept", "application/json")
        return firstValueFrom(
            this.httpclient.post<User>('http://localhost:8080/login', payload.toString(), { headers })
        )
    }
}