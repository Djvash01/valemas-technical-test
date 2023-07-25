import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '@models/comment.mode';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { RequestService } from '@services/request/request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private postId!: string;
  public comments$!: Observable<Comment[]>;

  constructor(
    private readonly request: RequestService,
    private readonly route: ActivatedRoute,
    private readonly endpoints: EndpointsService
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id') ?? '';
    this.getComments();
  }

  private getComments(): void {
    this.comments$ = this.request.get<Comment[]>(this.endpoints.post.getComments(this.postId));
  }

}
