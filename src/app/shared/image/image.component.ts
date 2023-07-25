import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Photo } from '@models/photo.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  public photo: Photo;

  constructor(
    public readonly dialogRef: MatDialogRef<ImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo,
  ) {
    this.photo = data;
  }

}
