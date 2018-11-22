import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { BookComponent } from 'src/app/books/book-list/book.component';



export const AdminRoutes: Routes = [
    {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'books', component: BookComponent }
    ]
  },
  // { path: '**', component: NotfoundComponent }

];
