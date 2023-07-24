import { Injectable } from '@angular/core';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  public readonly user = {
    getUser: `${environment.apiUrl}users`
  } as const;
}
