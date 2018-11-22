import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PagingService } from '../service/paging/paging.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() lengthItem: any;
  @Output() changePage: EventEmitter<any> = new EventEmitter();
  pager: any;

  constructor(private _pagerService: PagingService) { }

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {
    this.pager = this._pagerService.getPager(this.lengthItem, page, 10);
    this.changePage.emit({page: page});
  }

}
