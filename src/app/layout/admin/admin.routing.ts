import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';



export const AdminRoutes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'books',
        loadChildren:'src/app/book/book.module#BookModule'
      },
      {
        path: 'authors',
        loadChildren:'src/app/author/author.module#AuthorModule'
      }
    ]
  },
  // { path: '**', component: NotfoundComponent }

];
