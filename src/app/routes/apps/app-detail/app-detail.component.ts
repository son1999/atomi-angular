import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { get } from 'lodash';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/_core/services/http/api.service';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';
import { ToastrService } from 'src/app/_core/services/toastr/toastr.service';
import { CONFIG } from 'src/app/_utils/constants';
import { ConfirmChangeComponent } from '../_popups/confirm-change/confirm-change.component';



@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss'],
})
export class AppDetailComponent implements OnInit {
  app: any = null;
  showPanel = {
    isShowClientId: false,
    isShowClientSecret: false,
    isShowClientPublicKey: false,
    isShowServerPublicKey: false,
  };
  constructor(
    private activatedRouter: ActivatedRoute,
    private loading: LoadingService,
    private toastr: ToastrService,
    private api: ApiService,
    private router: Router,
    private bmService: BsModalService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.loading.next(true);
    this.api.get(`apps/${id}`).then((rs) => {
      this.loading.next(false);
      if (rs.statusCode != CONFIG.CODE.SUCCESS) {
        const msg = get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        this.router.navigate(['/apps']);
        return;
      }
      this.app = rs.data;
    });
  }
  refresh(type: 'CLIENT_ID' | 'CLIENT_SECRET') {
    this.bmService
      .show(ConfirmChangeComponent, {
        class: 'modal-lg h-75 d-flex align-items-center justify-content-center',
        initialState: {
          type: type,
        },
      })
      .content?.send.subscribe((rs) => {
        this.loading.next(true);
        this.api
          .post('apps/refresh', { appId: this.app.id, type })
          .then((rs) => {
            this.loading.next(false);
            if (rs.statusCode !== CONFIG.CODE.SUCCESS) {
              const msg = get(rs, 'msg', 'BASE.ERROR');
              this.toastr.error(msg);
              return;
            }
            this.toastr.success('Tạo mới thành công!');
            this.load();
          });
      });
  }
  
  changePublicKey() {
    this.router.navigate([`/apps/public-key/${this.app.id}`]);
  }
  download() {
    this.loading.next(true);
    const blob = new Blob([this.app.spiderPublicKey], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, 'public-key.pem');
    this.loading.next(false);
  }
  deleteApp(){
    this.loading.next(true);
    this.api.post('/apps/delete', {id : this.app.id}).then(rs => {
      this.loading.next(false);
      if (rs.statusCode !== CONFIG.CODE.SUCCESS) {
        const msg = get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }
      this.toastr.success('Xóa ứng dụng thành công!');
      this.router.navigate([`/apps`]);
    })
  }
}
