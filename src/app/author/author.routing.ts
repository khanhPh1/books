import { Routes } from '@angular/router';
import { AuthorComponent } from './author.component';
import { ListComponent } from './list/list.component';
import { CreateAuthorComponent } from './create-author/create-author.component';




export const BookRoutes: Routes = [
  {
    path: '', component: AuthorComponent, children: [
      { path: 'authors', component: ListComponent },
      { path: 'author/create', component: CreateAuthorComponent }
    ]
  },
  // { path: '**', component: NotfoundComponent }

];
