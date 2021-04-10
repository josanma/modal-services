import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalConfirmacionComponent} from './modal-confirmacion.component';
import {ModalModule} from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ModalConfirmacionComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class ModalConfirmacionModule { }
