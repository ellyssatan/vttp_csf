import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BGGService } from '../bgg.service';
import { Comment } from '../model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {

  params$!: Subscription
  comments : Comment[] = []

  constructor(private activatedRoute: ActivatedRoute
      , private bggSvc: BGGService) { }

  ngOnInit(): void {
    this.params$ = this.activatedRoute.params.subscribe(
      params => {
        const gameId = params['gameId']
        this.bggSvc.getComments(gameId)
          .then(result => {
            this.comments = result
            console.info('>>> comments: ', this.comments)
          })
          .catch(error => {
            console.error('>> error: ', error)
          })
      }
    )
  }

  ngOnDestroy(): void {
      
  }
}
