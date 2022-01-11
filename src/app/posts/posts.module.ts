import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PostsListComponent,
    SinglePostComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class PostsModule { }
