import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  constructor(private title: Title, private t: TranslateService) {}
  public setPageTitle(key: string) {
    this.t.get(key).subscribe((title) => {
      this.title.setTitle(title);
    });
  }
}
