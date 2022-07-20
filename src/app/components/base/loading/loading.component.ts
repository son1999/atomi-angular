import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  // isLoading = false;
  constructor(public loading: LoadingService) {
    // this.loading.isLoading$.subscribe((rs) => {
    //   this.isLoading = rs;
    // });
  }

  ngOnInit(): void {}
}
