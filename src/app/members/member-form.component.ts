import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MembersService } from '../services/members.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h2>Member</h2>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <label>Name<input formControlName="name" /></label>
      <label>Email<input formControlName="email" /></label>
      <button type="submit" [disabled]="form.invalid || saving">Save</button>
    </form>
  `
})
export class MemberFormComponent implements OnInit {
  form: FormGroup;
  saving = false;

  constructor(private fb: FormBuilder, private svc: MembersService, private route: ActivatedRoute, private router: Router) {
    this.form = this.fb.group({ name: ['', Validators.required], email: ['', [Validators.required, Validators.email]] });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.svc.get(+id).subscribe(m => this.form.patchValue(m));
    }
  }

  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    const op = this.route.snapshot.params['id'] ? this.svc.update(+this.route.snapshot.params['id'], this.form.value) : this.svc.create(this.form.value);
    op.subscribe({ next: () => this.router.navigate(['/members']), complete: () => (this.saving = false) });
  }
}
