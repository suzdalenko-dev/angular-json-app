import { Routes } from '@angular/router';
import { PostsList } from './posts-list/posts-list';
import { PostDetail } from './post-detail/post-detail';

export const routes: Routes = [
  {
    path: '',
    component: PostsList
  },
  {
    path: 'post/:id',
    component: PostDetail
  }
];