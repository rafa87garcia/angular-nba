import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class NotFoundInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((response) => {
        // console.log(request);
        // Si es la respuesta y ha dado un error 404 mostrar la alerta
        if (response instanceof HttpErrorResponse && response.status === 404) {
          window.alert(`Not found error: ${response.url}`);
        }
        // Se lanza un error con el mensaje que se desee.
        return throwError(() => new Error('Not found error'));
      }),
    );
  }
}
