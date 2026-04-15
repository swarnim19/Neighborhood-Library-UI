import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Member } from '../models/models';

@Component({
  template: `
    <h2>Members</h2>
    <a routerLink="/members/new">Add member</a>
    <ul>
      <li *ngFor="let m of members">
        {{ m.name }} ({{ m.email }})
      </li>
    </ul>
  `
})
export class MembersListComponent implements OnInit {
  members: Member[] = [];

  constructor(private svc: MembersService) {}

  ngOnInit(): void {
    this.svc.list().subscribe(m => (this.members = m));
  }
}
