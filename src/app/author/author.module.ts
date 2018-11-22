import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthorComponent } from './author.component';
import { RouterModule } from '@angular/router';
import { AuthorRoutes } from './author.routing';

@NgModule({
  declarations: [ListComponent, CreateAuthorComponent, AuthorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthorRoutes)
  ]
})
export class AuthorModule { }
