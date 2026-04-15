import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Member } from '../models/models';

@Injectable({ providedIn: 'root' })
export class MembersService {
  constructor(private api: ApiService) {}

  list() {
    return this.api.get<Member[]>('/members');
  }

  get(id: number) {
    return this.api.get<Member>(`/members/${id}`);
  }

  create(payload: Partial<Member>) {
    return this.api.post<Member>('/members', payload);
  }

  update(id: number, payload: Partial<Member>) {
    return this.api.put<Member>(`/members/${id}`, payload);
  }

  delete(id: number) {
    return this.api.delete<void>(`/members/${id}`);
  }
}
