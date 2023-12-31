import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatCardModule
  ]
})
export class PostModule { }
