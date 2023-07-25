import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  public albums$!: Observable<Photo[]>;

  constructor(
    private readonly request: RequestService,
    private readonly endpoint: EndpointsService,
    public readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  private getAlbums(): void {
    this.albums$ = this.request.get<Photo[]>(this.endpoint.photos.getAlbums);
  }

  photoTrackBy(index: number, photo: Photo): number {
    return photo.id;
  }

  openDialog(photo: Photo){
    this.dialog.open(ImageComponent, { data: photo });
  }


}
