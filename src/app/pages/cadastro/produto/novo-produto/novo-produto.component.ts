import { Component } from '@angular/core';
import { TemplateFormProdutoComponent } from '../template/template-form-produto/template-form-produto.component';
import { Produto } from '../../../../entities/Produto';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../../service/produto.service';
import { MessagesService } from '../../../../service/messages.service';

@Component({
  selector: 'app-novo-produto',
  standalone: true,
  imports: [TemplateFormProdutoComponent],
  templateUrl: './novo-produto.component.html',
  styleUrl: './novo-produto.component.css'
})
export class NovoProdutoComponent {
  btnText = "Gravar Dados";

  constructor(private router: Router,
              private produtoService: ProdutoService,
              private messageService: MessagesService
             ){}

  async criarProdutoHandler(produto: Produto){
    const formData = new FormData();

    formData.append("titulo", produto.titulo);
    formData.append("descricao", produto.descricao);
    formData.append("preco", String(produto.preco));
    if (String(produto.foto) != '') {
      formData.append("foto", produto.foto);
    }

    await this.produtoService.cadastraProduto(formData).subscribe(() => { 
      //window.location.reload() 
      this.messageService.add("Produto criado com sucesso !");

      this.router.navigate(["/listaProduto"])

    });

  }

}
