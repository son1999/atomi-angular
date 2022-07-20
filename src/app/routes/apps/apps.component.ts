import { Component, OnInit } from '@angular/core';
import { get } from 'lodash';
import { ApiService } from 'src/app/_core/services/http/api.service';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';
import { ToastrService } from 'src/app/_core/services/toastr/toastr.service';
import { CONFIG } from 'src/app/_utils/constants';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  items:any = null;
  constructor(
    private api: ApiService,
    private loading: LoadingService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading.next(true);
    this.api.get('/apps').then(rs => {
      this.loading.next(false);
      if(rs.statusCode !== CONFIG.CODE.SUCCESS){
        const msg =  get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }
      this.items = rs.data;
    });
  }
}
