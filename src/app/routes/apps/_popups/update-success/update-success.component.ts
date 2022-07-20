import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update-success',
  templateUrl: './update-success.component.html',
  styleUrls: ['./update-success.component.scss']
})
export class UpdateSuccessComponent implements OnInit {
  type: any = null;
  @Output() send = new EventEmitter(true);
  constructor(
    private bsModal: BsModalRef
  ) { }

  ngOnInit(): void {
  }
  submit(){
    this.send.emit(true);
    this.hide();
  }
  hide(){
    this.bsModal.hide();
  }
}
