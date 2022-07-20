import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from 'src/app/_utils/constants';
@Injectable()

export class TranslatorService {
  private defaultLanguage: string = CONFIG.DEFAULT_LANGUAGE;

  private availableLangs = CONFIG.LANGUAGES;

  constructor(public translate: TranslateService) {
    if (!translate.getDefaultLang()) translate.setDefaultLang(this.defaultLanguage);
    this.useLanguage();
  }
  instant(key: string){
    return this.translate.instant(key);
  }
  useLanguage(lang: string = '') {
    this.translate.use(lang || this.translate.getDefaultLang());
  }

  getCurrentLang(){
    return this.translate.currentLang;
  }
  getAvailableLanguages() {
    return this.availableLangs;
  }
}
