import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  param$ !: Subscription
  book !: Book

  constructor(private activatedRoute : ActivatedRoute, private bSvc : BookService) {}

  ngOnInit(): void {
    this.param$ = this.activatedRoute.params.subscribe(
      (params) => {
        const bookId = params['bookId']
        this.bSvc.getBookById(bookId)
              .then(result => {
                this.book = result
                console.info('>>> book: ', result)
              })
              .catch(error => {
                console.info('>>> error: ', error)
              })
      }
    )
  }

  
}
