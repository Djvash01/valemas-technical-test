import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '@models/user.model';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { RequestService } from '@services/request/request.service';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public pageSize = 10;
  public search: FormControl = new FormControl('');
  public users$!: Observable<User[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private readonly request: RequestService,
    private readonly endpoint: EndpointsService
  ) {}

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public ngOnInit(): void {
    this.getUsers();
    this.filterUser();
  }

  private getUsers(): void {
    this.users$ = this.request.get<User[]>(this.endpoint.user.getUsers);
  }

  private filterUser(): void {
    this.search.valueChanges.pipe(
      tap((value) => console.log(value)),
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.unsubscribe$),
      filter((value) => !!value),
      switchMap((value) =>
        this.request
          .get<User[]>(this.endpoint.user.getUsers)
          .pipe(
            map((users: User[]) =>{
              return users.filter((user) => user.id == value || user.name.includes(value))
            }),
            catchError(() => of([])
          ))
      ),
    );
    this.users$ = this.request.get<User[]>(this.endpoint.user.getUsers);
  }

  public trackBy(index: number, user: User): number {
    return user.id;
  }

  public clearSearch(): void {
    this.getUsers();
    this.search.reset();
  }
}
