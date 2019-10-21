import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { mergeMap  } from 'rxjs/operators';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

import { UserService } from "../services/user.service";
import { User } from "../types";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.userService.getCurrentUser().pipe(
      mergeMap((user: User) => {
        const request = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`
          }
        });
        return next.handle(request);
      })
    );
  }
}
