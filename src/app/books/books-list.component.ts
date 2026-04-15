import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/models';

@Component({
  template: `
    <h2>Books</h2>
    <a routerLink="/books/new">Add book</a>
    <ul>
      <li *ngFor="let b of books">
        <a [routerLink]="['/books', b.id]">{{ b.title }}</a>
        ({{ b.author }})
      </li>
    </ul>
  `
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  constructor(private svc: BooksService) {}

  ngOnInit(): void {
    this.svc.list().subscribe(b => (this.books = b));
  }
}
