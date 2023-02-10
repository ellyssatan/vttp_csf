import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Game, Comment } from "./model";

@Injectable()
export class BGGService {

    constructor(private http : HttpClient) {}

    getGames() : Promise<Game[]> {
        return lastValueFrom(
            this.http.get<Game[]>('/api/games')
        )
    }

    getComments(gid : number) : Promise<Comment[]> {
        return lastValueFrom(
            this.http.get<Comment[]>(`/api/game/${gid}/comments`)
        )
    }
}