import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Book, BookCopy } from '../models/models';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private _books$ = new BehaviorSubject<Book[]>([]);

  constructor(private api: ApiService) {}

  list(force = false): Observable<Book[]> {
    if (!force && this._books$.value.length) return this._books$.asObservable();
    this.api.get<Book[]>('/books').subscribe(b => this._books$.next(b));
    return this._books$.asObservable();
  }

  get(id: number) {
    return this.api.get<Book>(`/books/${id}`);
  }

  create(payload: Partial<Book>) {
    return this.api.post<Book>('/books', payload);
  }

  update(id: number, payload: Partial<Book>) {
    return this.api.put<Book>(`/books/${id}`, payload);
  }

  delete(id: number) {
    return this.api.delete<void>(`/books/${id}`);
  }

  addCopy(bookId: number, copy: Partial<BookCopy>) {
    return this.api.post<BookCopy>(`/books/${bookId}/copies`, copy);
  }
}
