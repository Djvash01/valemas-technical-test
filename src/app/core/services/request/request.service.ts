import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly http: HttpClient) { }

  public get<T>(url: string, options?: Record<string, unknown>): Observable<T>{
    return this.http.get<T>(url, options);
  }
}
