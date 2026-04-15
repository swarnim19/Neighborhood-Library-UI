import { Component, OnInit } from '@angular/core';
import { LoansService } from '../services/loans.service';
import { MembersService } from '../services/members.service';
import { BooksService } from '../services/books.service';
import { Member, Book, Loan } from '../models/models';

@Component({
  template: `
    <h2>Loans</h2>
    <div>
      <h3>Create Loan</h3>
      <label>Member
        <select #member>
          <option *ngFor="let m of members" [value]="m.id">{{ m.name }}</option>
        </select>
      </label>
      <label>Copy ID <input #copy /></label>
      <button (click)="createLoan(member.value, copy.value)">Borrow</button>
    </div>

    <h3>Active Loans</h3>
    <ul>
      <li *ngFor="let l of loans">Loan {{ l.id }} - copy {{ l.book_copy_id }} - member {{ l.member_id }} <button (click)="returnLoan(l.id)">Return</button></li>
    </ul>
  `
})
export class LoansComponent implements OnInit {
  members: Member[] = [];
  books: Book[] = [];
  loans: Loan[] = [];

  constructor(private loansSvc: LoansService, private membersSvc: MembersService, private booksSvc: BooksService) {}

  ngOnInit(): void {
    this.membersSvc.list().subscribe(m => (this.members = m));
    this.loansSvc.listOverdue().subscribe(l => (this.loans = l || []));
  }

  createLoan(memberId: number, copyId: number) {
    this.loansSvc.createLoan({ member_id: +memberId, book_copy_id: +copyId }).subscribe({
      next: l => this.loans.push(l),
      error: e => alert(e.message || 'Failed')
    });
  }

  returnLoan(loanId: number) {
    this.loansSvc.returnLoan(loanId).subscribe({ next: l => (this.loans = this.loans.filter(x => x.id !== loanId)) });
  }
}
