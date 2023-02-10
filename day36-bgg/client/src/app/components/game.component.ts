import { Component, OnInit } from '@angular/core';
import { BGGService } from '../bgg.service';
import { Game } from '../model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  games: Game[] = []

  constructor(private bggSvc: BGGService) { }

  ngOnInit(): void {
    this.bggSvc.getGames()
      .then(result => {
        this.games = result
        console.info('result: ', result)
      })
      .catch(error => {
        console.error('>>> error: ', error)
      })

  }
}
