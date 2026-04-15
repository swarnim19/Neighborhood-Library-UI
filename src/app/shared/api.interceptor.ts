import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: this._prefixUrl(req.url) });
    return next.handle(apiReq).pipe(
      catchError((err: HttpErrorResponse) => {
        // Normalize error response
        const error = { status: err.status, message: err.error?.message || err.message };
        return throwError(() => error);
      })
    );
  }

  private _prefixUrl(url: string) {
    if (url.startsWith('http')) return url;
    return `${environment.apiBase}${url.startsWith('/') ? '' : '/'}${url}`;
  }
}
