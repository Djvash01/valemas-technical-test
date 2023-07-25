import { Injectable } from '@angular/core';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  public readonly user = {
    getUsers: `${environment.apiUrl}users`,
    getUserById: (id: string) => `${environment.apiUrl}users/${id}`,
  } as const;

  public readonly post = {
    getPosts: `${environment.apiUrl}posts/`,
    getById: (id: number) => `${environment.apiUrl}posts/${id}`,
    getComments: (id: string) => `${environment.apiUrl}posts/${id}/comments`,
  } as const;

  public readonly photos = {
    getAlbums: `${environment.apiUrl}photos/`,
  } as const;
}
