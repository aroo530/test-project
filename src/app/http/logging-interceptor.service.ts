import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs';

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.method === 'POST') {
      console.log('Outgoing request');
      console.log(req.url);
      return next.handle(req);
    }
    return next.handle(req);
  }
}
