import { Routes } from '@angular/router';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { BookComponent } from './book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { CreatebookComponent } from './createbook/createbook.component';



export const BookRoutes: Routes = [
  {
    path: '', component: BookComponent, children: [
      { path: '', component: BooklistComponent },
      { path: 'create', component: CreatebookComponent }
    ]
  },
  // { path: '**', component: NotfoundComponent }

];
