import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading/loading.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [LoadingService]
})
export class AdminComponent implements OnInit {

  private loading: any = false;
  constructor(private _loadingService: LoadingService) {
    this._loadingService.loading.subscribe(data => {
      this.loading = data;
    });
  }

  ngOnInit() {
  }

}
