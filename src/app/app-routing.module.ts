import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books/books-list.component';
import { BookFormComponent } from './books/book-form.component';
import { BookDetailComponent } from './books/book-detail.component';
import { MembersListComponent } from './members/members-list.component';
import { MemberFormComponent } from './members/member-form.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/:id/edit', component: BookFormComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'members', component: MembersListComponent },
  { path: 'members/new', component: MemberFormComponent },
  { path: 'members/:id/edit', component: MemberFormComponent },
  { path: 'loans', component: LoansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
