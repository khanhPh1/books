import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { AdminComponent } from './admin.component';
import { ComponentsModule } from 'src/app/components/components.module';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { PaginationComponent } from 'src/app/pagination/pagination.component';
import { BookComponent } from 'src/app/books/book-list/book.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    AdminComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    ComponentsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [
  ]
})
export class AdminModule { }
