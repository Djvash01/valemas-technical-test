import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Photo } from '@models/photo.model';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { RequestService } from '@services/request/request.service';
import { ImageComponent } from '@shared/image/image.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit{

  public albums: Photo[] = [];
  public totalElements = 50;
  public pageSize = 20;
  public pageIndex = 0;

  constructor(
    private readonly request: RequestService,
    private readonly endpoint: EndpointsService,
    public readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  private getAlbums(): void {
    this.request.get<Photo[]>(this.endpoint.photos.getAlbums).subscribe((albums) => {
      this.albums = albums;
      this.totalElements = albums.length;
    });
  }

  public get albumsByPage(): Photo[] {
    if(!this.albums.length) return [];

    return this.albums.slice(((this.pageIndex+1)*this.pageSize)-this.pageSize, (this.pageIndex+1)*this.pageSize);
  }

  photoTrackBy(index: number, photo: Photo): number {
    return photo.id;
  }

  openDialog(photo: Photo){
    this.dialog.open(ImageComponent, { data: photo });
  }

  changePage(pageEvent: PageEvent): void {
    this.pageIndex = pageEvent.pageIndex;
  }


}
