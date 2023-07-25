import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageComponent } from '@shared/image/image.component';
import { MatPaginatorModule } from '@angular/material/paginator';




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
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class AlbumsModule { }
