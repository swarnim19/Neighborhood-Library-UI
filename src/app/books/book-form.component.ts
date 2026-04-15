import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  template: `
    <h2>{{ isEdit ? 'Edit' : 'New' }} Book</h2>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <label>Title<input formControlName="title" /></label>
      <div *ngIf="form.controls.title.invalid && form.controls.title.touched">Title required</div>
      <label>Author<input formControlName="author" /></label>
      <button type="submit" [disabled]="form.invalid || saving">Save</button>
    </form>
  `
})
export class BookFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  saving = false;

  constructor(
    private fb: FormBuilder,
    private svc: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({ title: ['', Validators.required], author: [''] });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.svc.get(+id).subscribe(b => this.form.patchValue(b));
    }
  }

  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    const data = this.form.value;
    const op = this.isEdit ? this.svc.update(+this.route.snapshot.params['id'], data) : this.svc.create(data);
    op.subscribe({ next: () => this.router.navigate(['/books']), complete: () => (this.saving = false) });
  }
}
