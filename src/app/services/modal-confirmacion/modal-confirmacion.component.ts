import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {
  @Input() message: string;
  result: Subject<boolean> = new Subject<boolean>();


  constructor(public modalRef: BsModalRef) {
  }

  ngOnInit(): void {}

  confirm(): void {
    this.result.next(true);
    this.modalRef.hide();
  }

  decline(): void {
    this.result.next(false);
    this.modalRef.hide();
  }

  public hide(): void {
    this.result.next(null);
    this.modalRef.hide();
  }

}
