import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksListComponent } from './books/books-list.component';
import { BookFormComponent } from './books/book-form.component';
import { BookDetailComponent } from './books/book-detail.component';
import { MembersListComponent } from './members/members-list.component';
import { MemberFormComponent } from './members/member-form.component';
import { LoansComponent } from './loans/loans.component';

import { ApiInterceptor } from './shared/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookFormComponent,
    BookDetailComponent,
    MembersListComponent,
    MemberFormComponent,
    LoansComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
