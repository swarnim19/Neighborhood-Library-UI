import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding:16px">
      <h1>Neighborhood Library — Staff UI</h1>
      <nav>
        <a routerLink="/books">Books</a> |
        <a routerLink="/members">Members</a> |
        <a routerLink="/loans">Loans</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
