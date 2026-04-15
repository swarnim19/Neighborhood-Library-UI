import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Loan } from '../models/models';

@Injectable({ providedIn: 'root' })
export class LoansService {
  constructor(private api: ApiService) {}

  createLoan(payload: Partial<Loan>) {
    return this.api.post<Loan>('/loans', payload);
  }

  returnLoan(loanId: number) {
    return this.api.post<Loan>(`/loans/${loanId}/return`, {});
  }

  listByMember(memberId: number) {
    return this.api.get<Loan[]>(`/loans`, { member_id: memberId });
  }

  listOverdue() {
    return this.api.get<Loan[]>('/loans', { overdue: true });
  }
}
