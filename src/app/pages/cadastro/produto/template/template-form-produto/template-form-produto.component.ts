import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { Produto } from '../../../../../entities/Produto';
import { Util } from '../../../../../util/util';

@Component({
  selector: 'app-template-form-produto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './template-form-produto.component.html',
  styleUrl: './template-form-produto.component.css'
})
export class TemplateFormProdutoComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Produto>();
  @Input() btnText: string = '';
  @Input() produtoData?: Produto | null = null;
  
  produtoForm!: FormGroup;
  
  constructor(private router: Router,
              private util: Util){}

  ngOnInit(): void {
    this.produtoForm = new FormGroup ({
      id: new FormControl(this.produtoData?.id ? this.produtoData.id : ''),
      titulo: new FormControl(this.produtoData?.titulo ? this.produtoData.titulo : ''),
      descricao: new FormControl(this.produtoData?.descricao ? this.produtoData.descricao : ''),
      preco: new FormControl(this.produtoData?.preco ? this.produtoData.preco : ''),
      foto: new FormControl('')
    });
  }

  get titulo(){
    return this.produtoForm.get("titulo");
  } 

  get descricao(){
    return this.produtoForm.get("descricao");
  }

  get preco(){
    return this.produtoForm.get("preco");
  } 

  get foto(){
    return this.produtoForm.get("foto");
  } 

  onFileSelected(event: any){
    const file: File = event.target.files[0];
    this.produtoForm.patchValue( {foto: file} );
    const preview = document.querySelector('#image-preview');
    const foto = document.querySelector('#foto');

    if (preview){
      preview!.remove();
    }

    if (foto){
      foto.remove();
    }

    const reader = new FileReader;
    reader.onload = function(event){
      const previewImage = document.createElement('img');
      previewImage.width = 300;
      previewImage.height = 200;
      previewImage.id = 'image-preview';
      previewImage.src = String(event.target!.result);
      const h2Image = document.querySelector('#h2-image');
      h2Image!.insertAdjacentElement('afterend', previewImage);
    }

    reader.readAsDataURL(event.target.files[0]);
  }

  enviar(){
    if (this.produtoForm.invalid)
      return

    this.onSubmit.emit(this.produtoForm.value);
  }

  // Trata e exibe a imagem gravada no bd de tipo blob
  trataImagem(blob: Blob){
    return this.util.trataImagem(blob);
  }

  cancelar(){
    this.router.navigate(["/listaProduto"]);
  }

}
