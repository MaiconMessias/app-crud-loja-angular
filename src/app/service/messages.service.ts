import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = ''
  msgOriginal: string = '';

  constructor() { }

  add(message: string){
    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear(){
    this.message = '';
  }

  tempoRestante(){
    this.msgOriginal = this.message;
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          this.add(this.msgOriginal);
          this.add(this.message + "Aguardande atualizando a tela em ... 1 segundo");
        }, 1500);
        this.add(this.msgOriginal);
        this.add(this.message + "Aguardande atualizando a tela em ... 2 segundos");
      }, 1000);
      this.add(this.msgOriginal);
      this.add(this.message + "Aguardande atualizando a tela em ... 3 segundos");
    }, 500);
  }
}
