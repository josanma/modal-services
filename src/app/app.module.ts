import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalConfirmacionModule } from './services/modal-confirmacion/modal-confirmacion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalConfirmacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
