import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class Util{

constructor(private sanitizer:DomSanitizer){}

// Trata e exibe a imagem gravada no bd de tipo blob
trataImagem(file: Blob){
    let objectURL = 'data:image/jpg;base64,' + file;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

}