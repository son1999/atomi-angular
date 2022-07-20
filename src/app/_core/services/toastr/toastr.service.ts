
import { ToastrService as Toastr } from "ngx-toastr";
import { Injectable } from '@angular/core';
import { TranslatorService } from "../translator/translator.service";

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(
    private toastr: Toastr,
    private t: TranslatorService,
  ) { }

  success(mgs: string, title: string | undefined = undefined){
    this.toastr.success(this.t.instant(mgs), title)
  }
  
  error(mgs: string, title: string | undefined = undefined){
    this.toastr.error(this.t.instant(mgs), title)
  }
  
  info(mgs: string, title: string | undefined = undefined){
    this.toastr.info(this.t.instant(mgs), title)
  }
  
  warning(mgs: string, title: string | undefined = undefined){
    this.toastr.warning(this.t.instant(mgs), title)
  }
}
