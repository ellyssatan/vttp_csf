import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookSummary } from '../model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  books : BookSummary[] = []
  constructor(private bSvc : BookService) {}

  ngOnInit(): void {
    this.bSvc.getBooks()
        .then(books => {
          this.books = books
          console.info('>>> books ', this.books)
        })
        .catch(error => {
          console.info('>>> error: ', error)
        })
  }

}
