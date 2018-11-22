import { Routes } from '@angular/router';
import { AuthorComponent } from './author.component';
import { ListComponent } from './list/list.component';
import { CreateAuthorComponent } from './create-author/create-author.component';

export const AuthorRoutes: Routes = [
  {
    path: '', component: AuthorComponent, children: [
      { path: '', component: ListComponent },
      { path: 'create', component: CreateAuthorComponent }
    ]
  },
  // { path: '**', component: NotfoundComponent }

];
