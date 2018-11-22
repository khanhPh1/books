import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthorComponent } from './author.component';

@NgModule({
  declarations: [ListComponent, CreateAuthorComponent, AuthorComponent],
  imports: [
    CommonModule
  ]
})
export class AuthorModule { }
