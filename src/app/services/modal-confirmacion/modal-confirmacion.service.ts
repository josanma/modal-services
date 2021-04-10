import {Injectable} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ModalConfirmacionComponent} from './modal-confirmacion.component';

@Injectable({
  providedIn: 'root'
})
export class ModalConfirmacionService {

  constructor(private bsModalService: BsModalService) {}

  confirm(message: string): Promise<boolean> {
    const modal = this.bsModalService.show(ModalConfirmacionComponent, {
      initialState: {message},
      ignoreBackdropClick: true,
      keyboard: false
    });
    return new Promise<boolean>((resolve) => modal.content.result.subscribe((result) => resolve(result)));
  }
}
