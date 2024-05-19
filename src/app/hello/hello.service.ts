// src/app/hello.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  private apiUrl = 'http://192.168.88.69:8080/api/hello';

  constructor(private http: HttpClient) {}

  sayHello(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
