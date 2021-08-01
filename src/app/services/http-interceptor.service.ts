import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const colnedReq  = req.clone({
      url: req.url,
      setHeaders: {
        "Authorization": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}`: ""
      }
    });
    return next.handle(colnedReq)
  }
}
