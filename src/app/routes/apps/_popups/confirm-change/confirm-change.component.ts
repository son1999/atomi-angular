import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-change',
  templateUrl: './confirm-change.component.html',
  styleUrls: ['./confirm-change.component.scss']
})
export class ConfirmChangeComponent implements OnInit {
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
