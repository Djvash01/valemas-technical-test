import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageComponent } from '@shared/image/image.component';



@NgModule({
  declarations: [
    AlbumsComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AlbumsModule { }
