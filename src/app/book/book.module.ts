import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookRoutes } from './book.routing';
import { BooklistComponent } from './booklist/booklist.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { BookComponent } from './book.component';

@NgModule({
  declarations: [
    BooklistComponent,
    PaginationComponent,
    CreatebookComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BookRoutes),
  ]
})
export class BookModule { }
