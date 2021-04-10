import {Component} from '@angular/core';
import {ModalConfirmacionService} from './services/modal-confirmacion/modal-confirmacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  confirmResponse = null;
  loading = false;

  constructor(private modalConfirmacionService: ModalConfirmacionService) {
  }

  async confirm() {
    this.confirmResponse = null;
    this.loading = true;
    this.confirmResponse = await this.modalConfirmacionService.confirm('CONFIRM MESSAGE!!');
    this.loading = false;
  }

}

