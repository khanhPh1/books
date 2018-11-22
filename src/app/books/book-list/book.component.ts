import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  constructor() { }
  totalCount:any = 1000;
  books: any = [];
  ngOnInit() {
    this.books = [
      {id: 1, name: 'name1', year: 1, owner: '1'},
      {id: 2, name: 'name2', year: 2, owner: '2'},
      {id: 3, name: 'name3', year: 3, owner: '3'},
      {id: 4, name: 'name4', year: 4, owner: '4'},
      {id: 5, name: 'name5', year: 5, owner: '5'},
      {id: 6, name: 'name6', year: 6, owner: '6'},
      {id: 7, name: 'name7', year: 7, owner: '7'},
      {id: 8, name: 'name8', year: 8, owner: '8'},
      {id: 9, name: 'name9', year: 9, owner: '9'},
    ];
  }

  changePage(event) {
    console.log(event);
    
  }
}
