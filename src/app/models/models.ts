export interface Book {
  id?: number;
  title: string;
  author?: string;
  isbn?: string;
  publisher?: string;
  year?: number;
}

export interface BookCopy {
  id?: number;
  book_id: number;
  barcode?: string;
  status?: 'available' | 'on_loan' | 'lost';
}

export interface Member {
  id?: number;
  name: string;
  email: string;
  phone?: string;
}

export interface Loan {
  id?: number;
  book_copy_id: number;
  member_id: number;
  borrowed_at?: string;
  due_at?: string;
  returned_at?: string | null;
  status?: string;
}

export interface ApiError {
  status: number;
  message: string;
}
