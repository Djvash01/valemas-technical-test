import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '@models/post.model';
import { User } from '@models/user.model';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { RequestService } from '@services/request/request.service';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public posts$!: Observable<Post[]>;
  public user$!: Observable<User>;
  private userId: string = '';

  constructor(
    private readonly request: RequestService,
    private readonly route: ActivatedRoute,
    private readonly endpoints: EndpointsService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') ?? '';
    this.getUser();
    this.getPost();
  }

  private getUser(): void {
    this.user$ = this.request.get<User>(
      this.endpoints.user.getUserById(
        this.userId
      )
    );
  }

  private getPost(): void {
    this.posts$ = this.request.get<Post[]>(this.endpoints.post.getPosts).pipe(
      map((posts) => posts.filter((post) => post.userId.toString() === this.userId)),
      tap((posts) => console.log(posts))
    );
  }
}
