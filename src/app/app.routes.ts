import { Routes } from '@angular/router';
import { PostDetail } from './post-detail/post-detail';

export const routes: Routes = [
    {
        path: 'post:id', 
        component: PostDetail
    }
];
