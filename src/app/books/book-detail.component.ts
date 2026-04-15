import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Book, BookCopy } from '../models/models';

@Component({
  template: `
    <div *ngIf="book">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
      <h3>Copies</h3>
      <ul>
        <li *ngFor="let c of copies">{{ c.barcode }} - {{ c.status }}</li>
      </ul>
      <div>
        <label>Barcode <input #barcode/></label>
        <button (click)="addCopy(barcode.value)">Add copy</button>
      </div>
    </div>
  `
})
export class BookDetailComponent implements OnInit {
  book?: Book;
  copies: BookCopy[] = [];

  constructor(private route: ActivatedRoute, private svc: BooksService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.svc.get(id).subscribe(b => (this.book = b));
  // fetch copies via BooksService list of copies endpoint if available
  this.svc.addCopy;
  // fallback direct API call via service's get method for copies
  // (BooksService can be extended to provide a copies() method)
  (this.svc as any).api.get<BookCopy[]>(`/books/${id}/copies`).subscribe(c => (this.copies = c));
  }

  addCopy(barcode: string) {
    if (!this.book) return;
    this.svc.addCopy(this.book.id!, { barcode }).subscribe(c => this.copies.push(c));
  }
}
